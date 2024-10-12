import tailwind from 'eslint-plugin-tailwindcss'
import ts from 'typescript-eslint'

const eslintConfig = [
  ...ts.configs.recommended,
  ...tailwind.configs['flat/recommended'],
]

export default eslintConfig