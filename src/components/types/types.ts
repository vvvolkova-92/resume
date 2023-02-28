import photo from "../../images/photo.jpg";
import telegramQr from "../../images/qrtelega.png";
import githubQr from "../../images/qrgithub.png";
import linkedInQr from "../../images/qrlinkedin.png";

export interface IData {
  data: IInitialData,
  name: string;
  photo: boolean;
  age: boolean;
  familyStatus: boolean;
  zodiac: boolean;
  telephone: boolean;
  telegram: boolean;
  github: boolean;
  linkedIn: boolean;
  email: boolean;
  hobby: boolean;
  personalQualities: boolean;
  stack: boolean;
  university: boolean;
  courses: boolean;
  projects: boolean;
  work: string;
  city: boolean;
  animals: boolean;
}

export interface IEducationItem {
  name: string;
  year: string;
  specialization: string;
  city: string;
  status: string;
}

export interface IProject {
  name: string;
  description: string;
}

export interface IEducation {
  university: IEducationItem[],
  courses: IEducationItem[],
  projects: IProject[],
}
export interface IPersonalInformation {
  fullName: string,
  shortName: string,
  photo: string,
  city: string,
  age: number,
  familyStatus: string,
  zodiac: string,
  telephone: string,
  email: string[],
  telegram: string,
  telegramQr: string,
  github: string,
  githubQr: string,
  linkedIn: string,
  linkedInQr: string,
  hobby: string[],
  animals: string,
  stack: string[],
  personalQualities: string[],
}
export interface IWorks {
  spec: boolean,
  organization: string,
  name: string,
  year: string,
  about: string[],
}

export interface IInitialData {
  personalInformation: IPersonalInformation;
  education: IEducation;
  works: IWorks[]
}
