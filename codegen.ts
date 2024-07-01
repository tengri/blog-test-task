import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  ignoreNoDocuments: true,
  schema: 'http://localhost:1337/graphql',
  documents: ['src/**/*.tsx'],
  generates: {
    './src/api/generated/gql/': {
      preset: 'client'
    }
  }
}

export default config

// #overwrite: true
// #schema: "http://localhost:1337/graphql"
// #generates:
// #  schema:
// #    api/graphql/schemas/schema.graphql:
// #      plugins:
// #        - "schema-ast"
// #  documents:
// #    apps/rbf/src/api/generated/graphqlTypes.ts:
// #      plugins:
// #        - "typescript"
// #        - "typescript-operations"
// #        - "typescript-react-apollo"
// #  ./src/api/generated/graphqlTypes.d.ts:
// #    plugins:
// #      - "typescript"
