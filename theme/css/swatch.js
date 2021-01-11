import { Color, Solver } from "./filterhack.js"

let color = new Color(255, 0, 0)
let solver = new Solver(color)
let result = solver.solve()
$('#logo').attr('style', result.filter)

