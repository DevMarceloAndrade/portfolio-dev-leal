import GitHubCalendar from "react-github-calendar";

const GitHubContributions = () => {
  return (
    <div className="surface-panel noise-overlay overflow-hidden p-4 md:p-6">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <h3 className="text-xl font-bold md:text-2xl">Consistência no GitHub</h3>
        <span className="chip">@DevMarceloAndrade</span>
      </div>

      <div className="max-w-full overflow-x-auto">
        <GitHubCalendar
          username="DevMarceloAndrade"
          blockSize={14}
          blockMargin={4}
          fontSize={12}
          colorScheme="dark"
          labels={{
            totalCount: "{{count}} contribuições no último ano",
          }}
          theme={{
            dark: ["#0b1f4b", "#0f3a8b", "#0060d2", "#0073fa", "#18c6ff"],
            light: ["#0b1f4b", "#0f3a8b", "#0060d2", "#0073fa", "#18c6ff"],
          }}
        />
      </div>
    </div>
  );
};

export default GitHubContributions;
