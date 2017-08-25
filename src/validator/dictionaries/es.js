const messages = {
  after: (field, [target]) => `El campo debe ser posterior a ${target}.`,
  alpha_dash: (field) => `El campo solo debe contener letras, números y guiones.`,
  alpha_num: (field) => `El campo solo debe contener letras y números.`,
  alpha_spaces: (field) => `El campo solo debe contener letras y espacios.`,
  alpha: (field) => `El campo solo debe contener letras.`,
  before: (field, [target]) => `El campo debe ser anterior a ${target}.`,
  between: (field, [min, max]) => `El campo debe estar entre ${min} y ${max}.`,
  confirmed: (field, [confirmedField]) => `El campo no coincide con ${confirmedField}.`,
  credit_card: (field, [confirmedField]) => `El campo es inválido.`,
  date_between: (field, [min, max]) => `El campo debe estar entre ${min} y ${max}.`,
  date_format: (field, [format]) => `El campo debe tener formato formato ${format}.`,
  decimal: (field, [decimals] = ['*']) => `El campo debe ser númerico y contener ${decimals === '*' ? '' : decimals} puntos decimales.`,
  digits: (field, [length]) => `El campo debe ser númerico y contener exactamente ${length} dígitos.`,
  dimensions: (field, [width, height]) => `El campo debe ser de ${width} pixeles por ${height} pixeles.`,
  email: (field) => `El campo debe ser un correo electrónico válido.`,
  ext: (field) => `El campo debe ser un archivo válido.`,
  image: (field) => `El campo debe ser una imagen.`,
  in: (field) => `El campo debe ser un valor válido.`,
  ip: (field) => `El campo debe ser una dirección ip válida.`,
  max: (field, [length]) => `El campo no debe ser mayor a ${length} caracteres.`,
  max_value: (field, [length]) => `El campo debe de ser ${length} o menor.`,
  mimes: (field) => `El campo debe ser un tipo de archivo válido.`,
  min: (field, [length]) => `El campo debe tener al menos ${length} caracteres.`,
  min_value: (field, [length]) => `El campo debe ser ${length} o superior.`,
  not_in: (field) => `El campo debe ser un valor válido.`,
  numeric: (field) => `El campo debe contener solo caracteres númericos.`,
  regex: (field) => `El formato del campo no es válido.`,
  required: (field) => `El campo es obligatorio.`,
  size: (field, [size]) => `El campo debe ser menor a ${size} KB.`,
  url: (field) => `El campo no es una URL válida.`
}

const locale = {
  name: 'es',
  messages,
  attributes: {}
}

export default locale
