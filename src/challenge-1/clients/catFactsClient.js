export const catFactsClient = async () => {
  const { data } = await (
    await fetch("https://meowfacts.herokuapp.com")
  ).json();

  const [fact] = data;

  return fact;
};
