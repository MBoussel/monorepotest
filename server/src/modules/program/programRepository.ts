import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type Program = {
  id: number;
  title: string;
  synopsis: string;
  country: string;
  year: number;
};

class ProgramRepository {
  async readAll() {
    // Execute the SQL SELECT query to retrieve all categories from the "program" table
    const [rows] = await databaseClient.query<Rows>("SELECT * FROM program");

    // Return the array of program
    return rows as Program[];
  }
}

export default new ProgramRepository();
