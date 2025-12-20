import { defineConfig } from "vitest/config";

export default defineConfig(({ mode }) => ({
  test: {
    projects: ["{apps,packages}/*"],
    environment: "happy-dom",
    reporters: mode === "ci" ? ["default", "junit"] : ["default"],
    outputFile: {
      junit: "./test-results/junit.xml",
    },
    coverage: {
      enabled: mode === "ci",
      include: ["**/src/**"],
      provider: "v8",
      reporter: [
        ["cobertura", { file: "cobertura.xml" }],
        ["html", { subdir: "html" }],
      ],
      reportsDirectory: "./test-results/coverage",
    },
  },
}));
