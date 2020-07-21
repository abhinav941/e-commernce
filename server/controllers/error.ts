const get404 = (req: any, res: any, next: any) => {
  res.status(404).render('error/404');
};

export default { get404 };
