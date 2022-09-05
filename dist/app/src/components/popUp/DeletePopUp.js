"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const react_native_elements_1 = require("react-native-elements");
const colors_1 = require("../../themes/colors");
const icons_1 = require("../../themes/icons");
const CancelButton_1 = __importDefault(require("../buttons/CancelButton"));
const ValidateButton_1 = __importDefault(require("../buttons/ValidateButton"));
const styles_1 = require("./styles");
const DeletePopUp = ({ isVisible, onBackdropPress, handleCancel, handleValidate, }) => (<react_native_elements_1.Overlay isVisible={isVisible} onBackdropPress={onBackdropPress} overlayStyle={styles_1.popUpStyles.lightGrey}>
    <react_native_elements_1.Icon name="eraser" type="font-awesome-5" size={icons_1.iMedium} color={colors_1.red}/>
    <react_native_elements_1.Text style={styles_1.popUpStyles.text}>Are you sure to delete this item ?</react_native_elements_1.Text>
    <react_native_elements_1.Divider style={styles_1.popUpStyles.divider}/>
    <react_native_1.View style={styles_1.popUpStyles.buttonsContainer}>
      <CancelButton_1.default onPress={handleCancel}/>
      <ValidateButton_1.default onPress={handleValidate}/>
    </react_native_1.View>
  </react_native_elements_1.Overlay>);
exports.default = (0, react_1.memo)(DeletePopUp);
//# sourceMappingURL=DeletePopUp.js.map