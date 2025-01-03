import { defineConfig } from 'orval'

export default defineConfig({
  api: {
    input: '../server/swagger.json',
    output: {
      baseUrl: 'http://localhost:3333',
      target: './src/http/generated/api.ts',
      client: 'react-query',
      httpClient: 'fetch',
      clean: true,
      override: {
        mutator: {
          path: './src/http/client.ts',
          name: 'http',
        },
      },
    },
  },
})
