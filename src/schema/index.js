import * as Yup from 'yup';
import { strings } from '../lang';

const NUMBER_REGEX = /^(?=.*?[0-9]).{8,}$/;
const UPPER_CASE = /^(?=.*?[a-zA-Z]).{8,}$/;
const SPECIAL_CASE = /^(?=.*[!#$%&?@"]).{8,}$/;

const IS_NON_WHITE_SPACE = /^\S*$/;

const URL_REGEX =
  /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/;

const schema = {
  login: Yup.object({
    url: Yup.string()
      .matches(URL_REGEX, strings.invalidUrl)
      .required(strings.emptyUrl),
    password: Yup.string()
      .required(strings.emptyPassword)
      .min(8, strings.invalidPassword)
      .test(
        'test-numeric',
        strings.passwordMustContain1Numeric,
        function (value) {
          const isValidNumber = NUMBER_REGEX.test(value);

          if (!isValidNumber) {
            return false;
          }

          return true;
        },
      )
      .test(
        'test-uppercase',
        strings.passwordMustContain1UpperCase,
        function (value) {
          const isValidUpper = UPPER_CASE.test(value);

          if (!isValidUpper) {
            return false;
          }

          return true;
        },
      )
      .test(
        'test-special',
        strings.passwordMustContain1SpecialCase,
        function (value) {
          const isValidUpper = SPECIAL_CASE.test(value);

          if (!isValidUpper) {
            return false;
          }

          return true;
        },
      )
      .test(
        'test-whitespace',
        strings.passwordNotContainWhiteSpace,
        function (value) {
          const isValidUpper = IS_NON_WHITE_SPACE.test(value);

          if (!isValidUpper) {
            return false;
          }

          return true;
        },
      ),
    username: Yup.string()
      .email(strings.invalidUsername)
      .required(strings.emptyUsername),
  }),
};

export default schema;
