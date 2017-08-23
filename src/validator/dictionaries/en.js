const messages = {
  _default: (field) => `The value is not valid.`,
  after: (field, [target, inclusion]) => `The must be after ${inclusion ? 'or equal to ' : ''}${target}.`,
  alpha_dash: (field) => `The may contain alpha-numeric characters as well as dashes and underscores.`,
  alpha_num: (field) => `The may only contain alpha-numeric characters.`,
  alpha_spaces: (field) => `The may only contain alphabetic characters as well as spaces.`,
  alpha: (field) => `The may only contain alphabetic characters.`,
  before: (field, [target, inclusion]) => `The must be before ${inclusion ? 'or equal to ' : ''}${target}.`,
  between: (field, [min, max]) => `The must be between ${min} and ${max}.`,
  confirmed: (field) => `The confirmation does not match.`,
  credit_card: (field) => `The is invalid.`,
  date_between: (field, [min, max]) => `The must be between ${min} and ${max}.`,
  date_format: (field, [format]) => `The must be in the format ${format}.`,
  decimal: (field, [decimals] = ['*']) => `The must be numeric and may contain ${decimals === '*' ? '' : decimals} decimal points.`,
  digits: (field, [length]) => `The must be numeric and exactly contain ${length} digits.`,
  dimensions: (field, [width, height]) => `The must be ${width} pixels by ${height} pixels.`,
  email: (field) => `The must be a valid email.`,
  ext: (field) => `The must be a valid file.`,
  image: (field) => `The must be an image.`,
  in: (field) => `The must be a valid value.`,
  ip: (field) => `The must be a valid ip address.`,
  max: (field, [length]) => `The may not be greater than ${length} characters.`,
  max_value: (field, [max]) => `The must be ${max} or less.`,
  mimes: (field) => `The must have a valid file type.`,
  min: (field, [length]) => `The must be at least ${length} characters.`,
  min_value: (field, [min]) => `The must be ${min} or more.`,
  not_in: (field) => `The must be a valid value.`,
  numeric: (field) => `The may only contain numeric characters.`,
  regex: (field) => `The format is invalid.`,
  required: (field) => `The field is required.`,
  size: (field, [size]) => `The must be less than ${size} KB.`,
  url: (field) => `The is not a valid URL.`
}

const locale = {
  name: 'en',
  messages,
  attributes: {}
}

export default locale
