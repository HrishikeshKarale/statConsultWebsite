export default interface navigationLinkType {
  name: String,
  component: String,
  // optional
  child?: {
      name: String,
      component: String,
    }[]
};