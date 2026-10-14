const UserController = require("./user-controller");
const User = require("./user");

describe("Pruebas para UserController", () => {
  let userController;

  beforeEach(() => {
    userController = new UserController();
  });

  // Pruebas base de tu plantilla
  test("add user to userController", () => {
    let user = new User(1234, "Santiago", "santiago@generation.org");
    userController.add(user);
    expect(userController.getUsers()).toContain(user);
  });

  test("remove user to userController", () => {
    let user = new User(1234, "Santiago", "santiago@generation.org");
    userController.add(user);
    userController.remove(user);
    expect(userController.getUsers()).not.toContain(user);
  });

  // --- TAREA 2 ---

  // 1. Prueba para add() con un usuario que NO está en la lista de usuarios
  test("add user that is not in userController list", () => {
    let newUser = new User(5678, "Kevin", "kevin@generation.org");
    userController.add(newUser);
    expect(userController.getUsers()).toContain(newUser);
  });

  // 2. Prueba para remove() con un usuario que NO está en la lista de usuarios
  test("remove user that is not in userController list", () => {
    let userNotInList = new User(9999, "Desconocido", "noexiste@generation.org");
    userController.remove(userNotInList);
    expect(userController.getUsers()).not.toContain(userNotInList);
  });

  // 3. Dos pruebas para findByEmail()
  test("findByEmail returns user when email exists", () => {
    let user = new User(4321, "Maria", "maria@generation.org");
    userController.add(user);
    expect(userController.findByEmail("maria@generation.org")).toEqual(user);
  });

  test("findByEmail returns undefined when email does not exist", () => {
    expect(userController.findByEmail("no_existe@generation.org")).toBeUndefined();
  });

  // 4. Dos pruebas para findById()
  test("findById returns user when id exists", () => {
    let user = new User(8888, "Carlos", "carlos@generation.org");
    userController.add(user);
    expect(userController.findById(8888)).toEqual(user);
  });

  test("findById returns undefined when id does not exist", () => {
    expect(userController.findById(0)).toBeUndefined();
  });
});