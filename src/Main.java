import java.sql.Connection;

public class Main {
    public static void main(String[] args) {

        DbFunctions db=new DbFunctions();
        Connection conn=db.connect_to_db("Tour","postgres","123");
       // db.createTable(conn,"employee");
        //db.insert_row(conn,"employee","Swetha","Paris");
          //db.read_data(conn,"employee");
        db.update_name(conn,"employee","maha","manisha");
        db.read_data(conn,"employee");
    }
}