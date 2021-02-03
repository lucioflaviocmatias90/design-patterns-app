class Database {
  private static instance: Database;

  private constructor() {}

  public static getInstance() {
    if (!this.instance) {
      console.log("Not instanced");
      this.instance = new Database();
    }
    return this.instance;
  }

  public connect(): void {
    console.log("Connected on database");
  }
}

const database1 = Database.getInstance();
database1.connect();

const database2 = Database.getInstance();
database2.connect();

const database3 = Database.getInstance();
database3.connect();
