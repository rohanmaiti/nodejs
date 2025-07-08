"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = __importDefault(require("./client"));
// use `prisma` in your application to read and write data in your DB
function addUser(email, password, firstname, lastname) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield client_1.default.user.create({
            data: {
                email: email,
                password: password,
                firstname: firstname,
                lastname: lastname !== null && lastname !== void 0 ? lastname : null
            },
        });
        console.log('added user response', res);
    });
}
// addUser( "rahul@gmail.com","123456","Rahul" )
function getAllUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield client_1.default.user.findMany();
        console.log('all users', res);
    });
}
getAllUsers();
function updateUser() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield client_1.default.user.update({});
    });
}
