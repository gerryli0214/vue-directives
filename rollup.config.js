import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel"
import json from 'rollup-plugin-json'
import { uglify } from 'rollup-plugin-uglify'

export default {
    input: 'src/index.js',
    output: {
        name: 'main',
        file: './lib/bundle.js',
        format: 'umd'
    },
    plugins: [
        resolve(),
        babel({
            exclude: 'node_modules/**'
        }),
        json(),
        uglify()
    ]
}