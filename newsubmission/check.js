public abstract class Check (){
    public boolean check(String s){
        if(s.length >19)
        return false
        else return true;
    }
}

public class CreditCard extends Check{

}
public class VisaCC extends CreditCard{
    File file = new File("C:\\path\\test.txt"); 
  
    BufferedReader br = new BufferedReader(new FileReader(file)); 
  
    String s = br.readLine();
    @override
    public boolean check(String s){
        if(s.length==13 && s.length == 16 && s.elementAt(0) ==4)
        return true;
        else return false
    }
}
public class MasterCC extends CreditCard{
    File file = new File("C:\\path\\test.txt"); 
  
    BufferedReader br = new BufferedReader(new FileReader(file)); 
  
    String s = br.readLine();
    @override
    public boolean check(String s){
        if(s.length==16 && s.elementAt(0) ==5 && s.elementAt(1) >=1 && s.elementAt(1) <=5)
        return true;
        else return false
    }
}
public class AmExCC extends CreditCard{
    File file = new File("C:\\path\\test.txt"); 
  
    BufferedReader br = new BufferedReader(new FileReader(file)); 
  
    String s = br.readLine();
    @override
    public boolean check(String s){
        if(s.length==15 && s.elementAt(0) ==3 && s.elementAt(1) ==4 && s.elementAt(1) ==7)
        return true;    
        else return false
    }
}

public class Discover extends CreditCard{
    File file = new File("C:\\path\\test.txt"); 
  
    BufferedReader br = new BufferedReader(new FileReader(file)); 
  
    String s = br.readLine();
    @override
    public boolean check(String s){
        if(s.substring(0, 4)== "6011" && s.length==16)
        return true;
        else return false
    }
}