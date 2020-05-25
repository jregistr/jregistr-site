/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const {printSchema} = require("gatsby/graphql");
const {promises: fs} = require("fs")

exports.onPostBootstrap = async ({store, reporter}) => {
    const {schema} = store.getState();
    reporter.info("[Custom Post Bootstrap] Generating schema.graphql file in root.");
    const schemaString = printSchema(schema);
    await fs.writeFile("schema.graphql", schemaString);
}
