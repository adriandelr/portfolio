import * as Linking from "expo-linking";

export default {
  prefixes: [Linking.makeUrl("/")],
  config: {
    screens: {
      Root: {
        screens: {
          TabDev: {
            screens: {
              TabDevScreen: "Dev",
            },
          },
          TabProjects: {
            screens: {
              TabProjectsScreen: "Projects",
            },
          },
          TabSnippets: {
            screens: {
              TabSnippetsScreen: "Snippets",
            },
          },
        },
      },
      NotFound: "*",
    },
  },
};
