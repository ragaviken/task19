import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import java.util.List;

public class RegisterTest {
    public static void main(String[] args) {
        // Set up the WebDriver (assuming ChromeDriver is in the PATH)
        WebDriver driver = new ChromeDriver();

        // Navigate to the registration page
        driver.get("https://www.guvi.in/register");

        // Using ID
        WebElement username = driver.findElement(By.id("username"));
        WebElement email = driver.findElement(By.id("email"));
        WebElement password = driver.findElement(By.id("password"));

        // Using ClassName
        List<WebElement> inputFields = driver.findElements(By.className("input-field"));
        WebElement submitButton = driver.findElement(By.className("submit-btn"));

        // Using TagName
        List<WebElement> inputs = driver.findElements(By.tagName("input"));
        WebElement form = driver.findElement(By.tagName("form"));
        WebElement button = driver.findElement(By.tagName("button"));

        // Using CSS Selector
        WebElement cssUsername = driver.findElement(By.cssSelector("#username"));
        WebElement cssEmail = driver.findElement(By.cssSelector("#email"));
        WebElement cssPassword = driver.findElement(By.cssSelector("#password"));
        WebElement cssSubmitButton = driver.findElement(By.cssSelector(".submit-btn"));

        // Using Xpath
        WebElement xpathUsername = driver.findElement(By.xpath("//input[@id='username']"));
        WebElement xpathEmail = driver.findElement(By.xpath("//input[@id='email']"));
        WebElement xpathPassword = driver.findElement(By.xpath("//input[@id='password']"));
        WebElement xpathSubmitButton = driver.findElement(By.xpath("//button[@class='submit-btn']"));

        // Example interaction with the elements
        username.sendKeys("testuser");
        email.sendKeys("testuser@example.com");
        password.sendKeys("password123");
        submitButton.click();

        // Close the browser
        driver.quit();
    }
}
