# Desktop Test

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="java"
values={[
{label: 'NotepadTest.java', value: 'java'}, {label: 'pom.xml', value: 'pom'}
]
}>

<TabItem value="java">

```java
package org.example;

import io.appium.java_client.windows.WindowsDriver;
import io.github.selcukes.core.driver.DriverManager;
import io.github.selcukes.core.driver.GridRunner;
import io.github.selcukes.core.enums.DeviceType;
import io.github.selcukes.core.page.WinPage;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

public class NotepadTest {

    @BeforeTest
    public void beforeTest() {
        GridRunner.startAppiumServer();
    }

    @Test
    public void notepadTest() {
        WindowsDriver driver = DriverManager.createDriver(DeviceType.DESKTOP);
        WinPage page = new WinPage(driver);
        By edit = By.className("Edit");
        page.enter(edit, "Welcome to Selcukes !!!")
            .enter(edit, Keys.ENTER)
            .enter(edit, "Time is")
            .enter(edit, Keys.ENTER)
            .enter(edit, Keys.F5)
            .enter(edit, Keys.CONTROL + "w" + Keys.CONTROL)
            .click(By.name("Don't Save"));
    }

    @AfterTest
    public void afterTest() {
        DriverManager.removeDriver();
        GridRunner.stopAppiumServer();
    }
}
```

</TabItem>
<TabItem value="pom">

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>org.example</groupId>
    <artifactId>examples</artifactId>
    <version>0.1-SNAPSHOT</version>
    <name>Selcukes Java Examples</name>
    <properties>

        <testng.version>7.5</testng.version>
        <selenium.version>4.1.4</selenium.version>
        <appium.version>8.0.0</appium.version>
        <cucumber.version>7.3.4</cucumber.version>
        <extentreports.version>5.0.9</extentreports.version>

        <selcukes.version>2.0.1</selcukes.version>

        <lombok.version>1.18.24</lombok.version>
        <slfj4.version>2.17.2</slfj4.version>

        <maven.compiler.source>11</maven.compiler.source>
        <maven.compiler.target>11</maven.compiler.target>
    </properties>
    <dependencies>
        <dependency>
            <groupId>io.github.selcukes</groupId>
            <artifactId>selcukes-core</artifactId>
            <version>${selcukes.version}</version>
        </dependency>
        <dependency>
            <groupId>io.github.selcukes</groupId>
            <artifactId>selcukes-reports</artifactId>
            <version>${selcukes.version}</version>
        </dependency>
        <dependency>
            <groupId>io.github.selcukes</groupId>
            <artifactId>selcukes-excel-runner</artifactId>
            <version>${selcukes.version}</version>
        </dependency>
        <dependency>
            <groupId>org.seleniumhq.selenium</groupId>
            <artifactId>selenium-java</artifactId>
            <version>${selenium.version}</version>
        </dependency>
        <dependency>
            <groupId>org.seleniumhq.selenium</groupId>
            <artifactId>selenium-grid</artifactId>
            <version>${selenium.version}</version>
        </dependency>
        <dependency>
            <groupId>io.appium</groupId>
            <artifactId>java-client</artifactId>
            <version>${appium.version}</version>
        </dependency>
        <dependency>
            <groupId>io.cucumber</groupId>
            <artifactId>cucumber-java</artifactId>
            <version>${cucumber.version}</version>
        </dependency>
        <dependency>
            <groupId>io.cucumber</groupId>
            <artifactId>cucumber-testng</artifactId>
            <version>${cucumber.version}</version>
        </dependency>
        <dependency>
            <groupId>io.cucumber</groupId>
            <artifactId>cucumber-picocontainer</artifactId>
            <version>${cucumber.version}</version>
        </dependency>
        <dependency>
            <groupId>com.aventstack</groupId>
            <artifactId>extentreports</artifactId>
            <version>${extentreports.version}</version>
        </dependency>
        <dependency>
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
            <version>${lombok.version}</version>
            <scope>provided</scope>
        </dependency>
        <dependency>
            <groupId>org.apache.logging.log4j</groupId>
            <artifactId>log4j-slf4j-impl</artifactId>
            <version>${slfj4.version}</version>
        </dependency>
    </dependencies>
</project>
```

</TabItem>
</Tabs>
