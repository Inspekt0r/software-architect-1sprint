import { registerApplication, start, LifeCycles } from "single-spa";

registerApplication({
  name: "@myOrg/auth-app",
  app: () =>
    import(
      /* webpackIgnore: true */ // @ts-ignore-next
      "@myOrg/auth-app"
    ),
  activeWhen: ["/signup", "/signin", "/users"],
});

registerApplication({
  name: "@myOrg/card-app",
  app: () =>
    import(
      /* webpackIgnore: true */ // @ts-ignore-next
      "@myOrg/card-app"
    ),
  activeWhen: ["/cards"],
});

registerApplication({
  name: "@myOrg/profile-app",
  app: () =>
    import(
      /* webpackIgnore: true */ // @ts-ignore-next
      "@myOrg/profile-app"
    ),
  activeWhen: ["/profile"],
});

registerApplication({
  name: "@myOrg/navbar",
  app: () =>
    import(
      /* webpackIgnore: true */ // @ts-ignore-next
      "@myOrg/navbar"
    ),
  activeWhen: ["/"], //idk
});

start({
  urlRerouteOnly: true,
});
