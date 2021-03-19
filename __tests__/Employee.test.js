// Employee Class Unit Tests

// Import Employee class
const Employee = require("../lib/Employee");

describe("Employee Class", () => {
  // Test getName() method
  describe("getName method", () => {
    it("should return the Employee's name", () => {
      const employee = new Employee(1, "James Smith", "james@email.com");

      expect(employee.getName()).toBe(employee.name);
    });
  });

  // Test getID() method
  describe("getID method", () => {
    it("should return the employee's id", () => {
      const employee = new Employee(3, "Jane Doe", "jane@email.com");

      expect(employee.getId()).toBe(employee.id);
    });
  });

  // Test getEmail() method
  describe("getEmail method", () => {
    it("should return the employee's email", () => {
      const employee = new Employee(1, "James Smith", "james@email.com");

      expect(employee.getEmail()).toBe(employee.email);
    });
  });

  // Test getRole() method
  describe("getRole method", () => {
    it('should return "Employee"', () => {
      const employee = new Employee(1, "James Smith", "james@email.com");

      expect(employee.getRole()).toBe("Employee");
    });
  });
});
