export default (req, res) => {
  console.log('time requested, fetching time...');
  const now = Date.now();
  console.log({ now });
  res.statusCode = 200;
  res.json({ now });
};
