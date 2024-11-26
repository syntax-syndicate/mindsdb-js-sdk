import Table from './table';

/**
 * Abstract class outlining Table API operations supported by the SDK.
 */
export default abstract class TablesApiClient {
  /**
   * Creates a table in an integration from a given SELECT statement.
   * @param {string} name - Name of table to be created.
   * @param {string} integration - Name of integration the table will be a part of.
   * @param {string} select - SELECT statement to use for populating the new table with data.
   * @returns {Promise<Table>} - Newly created table.
   * @throws {MindsDbError} - Something went wrong creating the table.
   */
  abstract createTable(
    name: string,
    integration: string,
    select: string
  ): Promise<Table>;

  /**
   * Creates a table in an integration from a given SELECT statement. If the table already exists, it is
   * deleted first and then recreated.
   * @param {string} name - Name of table to be created/replaced.
   * @param {string} integration - Name of integration the table will be a part of.
   * @param {string} select - SELECT statement to use for populating the new/replaced table with data.
   * @returns {Promise<Table>} - Newly created/replaced table.
   * @throws {MindsDbError} - Something went wrong creating or replacing the table.
   */
  abstract createOrReplaceTable(
    name: string,
    integration: string,
    select: string
  ): Promise<Table>;

  /**
   * Deletes a table from its integration.
   * @param {string} name - Name of the table to be deleted.
   * @param {string} integration - Name of the integration the table to be deleted is a part of.
   * @throws {MindsDbError} - Something went wrong deleting the table.
   */
  abstract deleteTable(name: string, integration: string): Promise<void>;



  /**
   * Updates a table from its integration.
   * @param {string} name - Name of the table to be updated.
   * @param {string} integration - Name of the integration the table to be updated is a part of.
   * @param {string} updateQuery - The SQL UPDATE query to run for updating the table.
   * @throws {MindsDbError} - Something went wrong deleting the table.
   */
  abstract updateTable(
    name: string,
    integration: string,
    updateQuery: string
  ): Promise<void>;

  /**
  * Insert data into this table.
  * @param {string} name - Name of the table to be deleted.
  * @param {string} integration - Name of the integration the table to be deleted is a part of.
  * @param {string} select -  SELECT query to insert data from.
  * @throws {MindsDbError} - Something went wrong inserting data into the table.
  */
  abstract insertTable(name: string, integration: string, select: string): Promise<void>;
  /**
   * Deletes a file from the files integration.
   * @param {string} name - Name of the file to be deleted.
   * @throws {MindsDbError} - Something went wrong deleting the file.
   */
  abstract deleteFile(name: string): Promise<void>;

}

/**
 * Removes a table from its integration.
 * @param {string} name - Name of the table to be removed.
 * @param {string} integration - Name of the integration the table belongs to.
 * @returns {Promise<void>} - Resolves when the table is successfully removed.
 * @throws {MindsDbError} - Something went wrong removing the table.
 */
abstract removeTable(name: string, integration: string): Promise<void>;

