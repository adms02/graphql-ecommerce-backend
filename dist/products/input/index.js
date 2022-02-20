"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteProductInput = exports.CreateProductInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const class_validator_1 = require("class-validator");
let CreateProductInput = class CreateProductInput {
};
__decorate([
    graphql_1.Field(),
    class_validator_1.MaxLength(30),
    __metadata("design:type", String)
], CreateProductInput.prototype, "name", void 0);
__decorate([
    graphql_1.Field(),
    class_validator_1.Length(30, 255),
    __metadata("design:type", String)
], CreateProductInput.prototype, "description", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", Number)
], CreateProductInput.prototype, "price", void 0);
__decorate([
    graphql_1.Field(() => [String]),
    __metadata("design:type", Array)
], CreateProductInput.prototype, "images", void 0);
CreateProductInput = __decorate([
    graphql_1.InputType()
], CreateProductInput);
exports.CreateProductInput = CreateProductInput;
let DeleteProductInput = class DeleteProductInput {
};
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], DeleteProductInput.prototype, "id", void 0);
DeleteProductInput = __decorate([
    graphql_1.InputType()
], DeleteProductInput);
exports.DeleteProductInput = DeleteProductInput;
//# sourceMappingURL=index.js.map