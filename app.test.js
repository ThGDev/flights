const rewire = require("rewire")
const app = rewire("./app")
const flightFromNow = app.__get__("flightFromNow")
// @ponicode
describe("flightFromNow", () => {
    test("0", () => {
        flightFromNow()
    })
})
