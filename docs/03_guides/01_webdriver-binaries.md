# WebDriver Binaries

[WebDriver Binaries](https://github.com/selcukes/selcukes-java/tree/master/webdriver-binaries) is an open-source Java library that automatically downloads and configures the binary drivers (e.g., chromedriver, geckodriver, msedgedriver, etc.) required by Selenium WebDriver.

## Motivation

[Selenium WebDriver](https://www.selenium.dev/documentation/webdriver/) is a library that allows controlling web browsers programmatically.
It provides a cross-browser API that can be used to drive web browsers (e.g., Chrome, Edge, or Firefox, among others) using different programming languages (e.g., Java, JavaScript, Python, C#, or Ruby).
The primary use of Selenium WebDriver is implementing automated tests for web applications.

Selenium WebDriver carries out the automation using the native support of each browser.
For this reason, we need to place a binary file called _driver_ between the test using the Selenium WebDriver API and the browser to be controlled.
Examples of drivers for major web browsers nowadays are [chromedriver](https://chromedriver.chromium.org/) (for Chrome), [geckodriver](https://github.com/mozilla/geckodriver/) (for Firefox), or [msedgedriver](https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver/) (for Edge).
As you can see in the following picture, the communication between the WebDriver API and the driver binary is done using a standard protocol called [W3C WebDriver](https://www.w3.org/TR/webdriver/) (formerly the so-called _JSON Wire Protocol_).
Then, the communication between the driver and the browser is done using the native capabilities of each browser.

image::selenium-webdriver-architecture.png[scaledwidth=100%]

From a practical point of view, we need to make a _driver management process_ to use Selenium WebDriver.
This process consists on:

1. Download.
Drivers are platform-specific binary files.
To download the proper driver, we have to identify the driver type we need (e.g., chromedriver if we want to use Chrome), the operating system (typically, Windows, Linux, or Mac OS), the architecture (typically, 32 or 64 bits), and very important, the driver version.
Concerning the version, each driver release is usually compatible with a given browser version(s).
For this reason, we need to discover the correct driver version for a specific browser release (typically reading the driver documentation or release notes).
2. Setup.
Once we have downloaded the driver to our computer, we need to provide a way to locate this driver from our Selenium WebDriver tests.
In Java, this setup can be done in two different ways.
First, we can add the driver location to our `PATH` environmental variable.
Second, we can use _Java system properties_ to export the driver path.
Each driver path should be identified using a given system property, as follows:

```java
System.setProperty("webdriver.chrome.driver", "/path/to/chromedriver");
System.setProperty("webdriver.gecko.driver", "/path/to/geckodriver");
System.setProperty("webdriver.edge.driver", "/path/to/msedgedriver");
System.setProperty("webdriver.opera.driver", "/path/to/operadriver");
System.setProperty("webdriver.ie.driver", "C:/path/to/IEDriverServer.exe");
```

3. Maintenance.
Last but not least, we need to warranty the compatibility between driver and browser in time.
This step is relevant since modern browsers automatically upgrade themselves (i.e., they are _evergreen_ browsers), and for this reason, the compatibility driver-browser is not warranted in the long run.
For instance, when a WebDriver test using Chrome faces a driver incompatibility, it reports the following error message: "_this version of chromedriver only supports chrome version N_." As you can see in[StackOverflow]( https://stackoverflow.com/search?q=this+version+of+chromedriver+only+supports+Chrome+version), this is a recurrent problem for manually managed drivers (chromedriver in this case).

## Setup

WebDriver Binaries is primarily used as a Java dependency . We typically use a _build tool_ (such as [Maven](https://maven.apache.org/) or [Gradle](https://gradle.org/)) to resolve the WebDriverManager dependency. in Maven as follows (notice that it is declared using the `test` scope, since it is typically used in tests classes):

```xml
<dependency>
    <groupId>io.github.selcukes</groupId>
    <artifactId>webdriver-binaries</artifactId>
    <version>{project-version}</version>
    <scope>test</scope>
</dependency>
```

In the case of a Gradle project, we can declare WebDriverManager as follows (again, for tests):

```java
dependencies {
    testImplementation("io.github.selcukes:webdriver-binaries:{project-version}")
}
```

## Driver Management

The primary use of WebDriver Binaries is the automation of driver management.
For using this feature, you need to select a given driver in the WebDriver Binaries API (e.g., `chromeDriver()` for Chrome) and invoke the method `setup()`.
The following example shows a test case using [TestNG](https://testng.org/doc/), Selenium WebDriver, WebDriver Binaries.
In this test, we invoke WebDriver Binaries in the setup method for all tests (`@BeforeClass`).
This way, the required binary (chromeDriver) will be available for all the WebDriver tests using Chrome in this class.

```java
public class WebDriverTest {

    private WebDriver driver;

    @BeforeClass
    public static void setupClass() {
        WebDriverBinary.chromeDriver().setup();
    }

    @Before
    public void setupTest() {
        driver = new ChromeDriver();
    }

    @After
    public void teardown() {
        if (driver != null) {
            driver.quit();
        }
    }

    @Test
    public void test() {
        // Your test code here
    }

}
```

WebDriver Binaries provides a set of _binaries_ for Chrome, Firefox, Edge, Opera, Chromium, and Internet Explorer.
The basic use of these binary is the following:

Description | Method
  --- | ---
Download the latest binary| WebDriverBinary.chromeDriver().setup(); <br/> WebDriverBinary.firefoxDriver().setup(); <br/> WebDriverBinary.ieDriver().setup(); <br/> WebDriverBinary.edgeDriver().setup(); <br/> WebDriverBinary.edgeDriver().setup(); <br/> WebDriverBinary.operaDriver().setup(); <br/> WebDriverBinary.grid().setup();
Download binaries for specific architecture | WebDriverBinary.chromeDriver().arch64().setup(); <br/> WebDriverBinary.firefoxDriver().arch32().setup();
Download binaries by specifying custom download location| WebDriverBinary.chromeDriver().targetPath("temp").setup(); WebDriverBinary.firefoxDriver().targetPath("downloadLocation").setup();
Download binaries for a specific release version | WebDriverBinary.firefoxDriver().version("v0.26.0").setup();





