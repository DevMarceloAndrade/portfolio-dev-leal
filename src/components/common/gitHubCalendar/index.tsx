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
          colorScheme="light"
          labels={{
            totalCount: "{{count}} contribuições no último ano",
          }}
          theme={{
            light: ["#fff2e4", "#ffd6b7", "#ffb68e", "#ff8f61", "#e95a2d"],
            dark: ["#fff2e4", "#ffd6b7", "#ffb68e", "#ff8f61", "#e95a2d"],
          }}
        />
      </div>
    </div>
  );
};

export default GitHubContributions;
