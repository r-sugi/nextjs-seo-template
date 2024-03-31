const title = (page: string | undefined) => {
  const site = "myWebSite | マイウェブサイト";
  return page ? `${page} | ${site}` : site;
};

const publicPages = {
  index: {
    path: () => "/",
    title: () => title("トップページ"),
    description: () => "トップページです。",
  },
};

export { publicPages };
