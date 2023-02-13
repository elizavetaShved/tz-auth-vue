/** здесь подрузуемвается запрос на сервер: авторизован ли пользователь.
 * для наглядности просто смотрим, сохранен ли токен в localStorage
 * */
export const getUser = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ isAuth: !!localStorage.getItem("token") });
    });
  });
};
