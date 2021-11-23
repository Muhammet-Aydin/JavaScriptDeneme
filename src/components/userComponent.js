import { BaseLogger, ElastıcLogger } from "../crossCuttingConcerns/loggins/logger.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"

console.log("User Component Yuklendı.")

let logger1=new ElastıcLogger()

let userService=new UserService(logger1)



let user1=new User(1,"muhammet","aydın","istanbul")
let user2=new User(2,"baran","aydın","istanbul")

userService.add(user1)
userService.add(user2)

console.log(userService.List())


userService.GetById(1)



