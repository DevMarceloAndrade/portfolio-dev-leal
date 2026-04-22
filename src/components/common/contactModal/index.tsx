'use client';

import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { FormEvent, useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';

type ContactModalProps = {
  label?: string;
  className?: string;
};

type SubmitStatus = 'idle' | 'success' | 'error';

type ParticleSpec = {
  id: number;
  left: number;
  top: number;
  size: number;
  duration: number;
  delay: number;
};

function buildParticles(total: number): ParticleSpec[] {
  return Array.from({ length: total }, (_, index) => ({
    id: index,
    left: (index * 17 + (index % 4) * 9) % 100,
    top: (index * 11 + (index % 5) * 13) % 100,
    size: 2 + (index % 3),
    duration: 6.8 + (index % 7) * 0.72,
    delay: (index % 9) * 0.43,
  }));
}

const ContactModal = ({ label = 'Vamos conversar', className = 'btn-primary btn-pulse' }: ContactModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<SubmitStatus>('idle');

  const particles = useMemo(() => buildParticles(26), []);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const email = formData.get('email')?.toString().trim() ?? '';
    const message = formData.get('message')?.toString().trim() ?? '';

    if (!email || !message) {
      setStatus('error');
      return;
    }

    setIsSending(true);
    setStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, message }),
      });

      if (!response.ok) {
        throw new Error('Falha no envio da mensagem.');
      }

      form.reset();
      setStatus('success');
    } catch {
      setStatus('error');
    } finally {
      setIsSending(false);
    }
  };

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-tech-backdrop fixed inset-0 z-[120] flex items-center justify-center px-3 py-8"
          initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
          animate={{ opacity: 1, backdropFilter: 'blur(12px)' }}
          exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            className="modal-tech-aurora"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45 }}
          />
          <div className="modal-tech-grid" />
          <div className="modal-tech-vignette" />

          <div className="modal-tech-particles">
            {particles.map((particle) => (
              <span
                key={particle.id}
                className="modal-tech-particle"
                style={{
                  left: `${particle.left}%`,
                  top: `${particle.top}%`,
                  width: `${particle.size}px`,
                  height: `${particle.size}px`,
                  animationDuration: `${particle.duration}s`,
                  animationDelay: `-${particle.delay}s`,
                }}
              />
            ))}
          </div>
          <div className="modal-tech-scanline" />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Fale com Marcelo Leal"
            className="modal-panel max-h-[92vh] overflow-y-auto"
            style={{ transformStyle: 'preserve-3d', perspective: 1200 }}
            initial={{ opacity: 0, y: 90, scale: 0.9, rotateX: 16, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: 45, scale: 0.96, rotateX: -10, filter: 'blur(2px)' }}
            transition={{ type: 'spring', stiffness: 250, damping: 23, mass: 0.85 }}
            onClick={(event) => event.stopPropagation()}
          >
            <span className="modal-tech-corner modal-tech-corner-tl" />
            <span className="modal-tech-corner modal-tech-corner-br" />

            <div className="modal-content-shell">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="chip">Canal direto</span>
                  <h2 className="hero-gradient-text mt-4 text-3xl font-extrabold leading-tight md:text-4xl">
                    Vamos construir algo
                    <br />
                    realmente memorável.
                  </h2>
                </div>
                <button
                  type="button"
                  className="btn-secondary h-10 w-10 shrink-0 rounded-sm p-0 text-lg"
                  onClick={() => setIsOpen(false)}
                  aria-label="Fechar modal"
                >
                  ×
                </button>
              </div>

              <p className="mt-4 text-sm text-[var(--muted)] md:text-base">
                Descreva o contexto, objetivo e prazo. Eu retorno com direcionamento técnico e proposta de execução.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="space-y-2">
                  <label htmlFor="modal-email" className="text-sm font-semibold text-[#d8eaff]">
                    Seu e-mail
                  </label>
                  <input
                    id="modal-email"
                    type="email"
                    name="email"
                    className="input-field"
                    required
                    placeholder="voce@empresa.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="modal-message" className="text-sm font-semibold text-[#d8eaff]">
                    Mensagem
                  </label>
                  <textarea
                    id="modal-message"
                    name="message"
                    className="textarea-field"
                    required
                    placeholder="Descreva contexto, escopo e resultado esperado."
                  />
                </div>

                <button type="submit" className="btn-primary btn-pulse w-full" disabled={isSending}>
                  {isSending ? 'Enviando...' : 'Enviar mensagem'}
                </button>

                {status === 'success' && (
                  <p className="rounded-sm border border-emerald-400/50 bg-emerald-500/15 px-3 py-2 text-sm font-semibold text-emerald-200">
                    Mensagem enviada com sucesso.
                  </p>
                )}
                {status === 'error' && (
                  <p className="rounded-sm border border-rose-400/50 bg-rose-500/15 px-3 py-2 text-sm font-semibold text-rose-200">
                    Não foi possível enviar agora. Tente novamente em instantes.
                  </p>
                )}
              </form>

              <div className="mt-6 grid gap-3 md:grid-cols-2">
                <Link
                  href="https://www.linkedin.com/in/dev-marcelo-leal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  LinkedIn
                </Link>
                <Link
                  href="https://github.com/DevMarceloAndrade"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  GitHub
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <button
        type="button"
        className={className}
        onClick={() => {
          setStatus('idle');
          setIsOpen(true);
        }}
      >
        {label}
      </button>
      {isMounted ? createPortal(modalContent, document.body) : null}
    </>
  );
};

export default ContactModal;
