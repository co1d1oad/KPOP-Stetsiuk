import { Component } from "@angular/core";
import { UserRequest } from "./user-request";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "Lab7";
  public userData: UserRequest = new UserRequest();

  emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  ageRegex = /([0-9]*)?/;
  phoneRegex = /^(\+380)(50|66|67|98|97|96|68|39|63|93|99|95){1}[0-9]{7}$/;

  nameErr = "";
  loginErr = "";
  sexErr = "";
  bdErr = "";
  emailErr = "";
  ageErr = "";
  cardErr = "";
  phoneErr = "";
  animalErr = "";

  checkData() {
    this.nameErr = "";
    this.loginErr = "";
    this.sexErr = "";
    this.bdErr = "";
    this.emailErr = "";
    this.ageErr = "";
    this.cardErr = "";
    this.phoneErr = "";
    this.animalErr = "";
    let isValid = true;

    if (this.userData.email === "") {
      this.emailErr = "Заполните";
      isValid = false;
    } else if (!this.emailRegex.test(this.userData.email)) {
      this.emailErr = "Ошибка";
      isValid = false;
    }

    if (this.userData.age === "") {
      this.ageErr = "Заполните";
      isValid = false;
    } else if (!this.ageRegex.test(this.userData.age)) {
      this.ageErr = "Ошибка";
      isValid = false;
    }

    if (this.userData.phone === "") {
      this.phoneErr = "Заполните";
      isValid = false;
    } else if (!this.phoneRegex.test(this.userData.phone)) {
      this.phoneErr = "Ошибка";
      isValid = false;
    }

    if (this.userData.name === "") {
      this.nameErr = "Заполните";
      isValid = false;
    }

    if (this.userData.sex === "") {
      this.sexErr = "Заполните";
      isValid = false;
    }

    if (this.userData.login === "") {
      this.loginErr = "Заполните";
      isValid = false;
    }
    if (this.userData.animal === "") {
      this.animalErr = "Заполните";
      isValid = false;
    }

    if (isValid) {
      this.userData = new UserRequest();
      alert(
          "Окей"
      );
    }
  }
}
