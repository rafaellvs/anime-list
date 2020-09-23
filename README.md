# anime-list

Anime list consuming [Kitsu API](https://kitsu.docs.apiary.io/).

Deployed at https://anime-list.vercel.app/

## stack
- nextjs
- ant design
- less
- eslint

## run locally
run `yarn`

run `yarn dev`

## structure
### components
Anime: gets `data` arg, from which it renders single anime information

Layout: simple layout including navbar and div for main content

NavBar: fixed div with navigation links

### helpers
api: interface with KitsuAPI. Contains fetchAnimes, which fetches 10 animes at a time (based on offset), and fetchAnime, which fetches a single anime by `id` 

table-data: generates `columns` and `dataSource` for Antd Table component.
Ref: https://ant.design/components/table/

### pages
_app: global styles

index: home page

animes/index: table list page. Responsible for fetching data and sending it to Table component

animes/[id]: single anime page. Fetches single anime by url id then sends it to Anime component

### styles
styles for components and antd (also antd variables)

### public
bg image

### notes
first time working with next, antd and less

I didnt use next pre-rendering because I didnt think it was wise to generate 15k static pages (is it a good idea?)

Im used to `styled-components`, so i dont know if the styling structure is good

Im not used to UI libs, so I did by best to style antd components (at styles/antd.less). Not sure if thats the best way

I had a little trouble making everything work together. Used these:

https://medium.com/@tanakorn0412/customize-ant-design-theme-in-next-js-version-9-5958fbc531a3

https://dev.to/burhanuday/using-ant-design-with-nextjs-custom-variables-for-ant-design-57m5



