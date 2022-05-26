# Mobile Test

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="java"
values={[
{label: 'MobileTest.java', value: 'java'}, {label: 'pom.xml', value: 'pom'}
]
}>

<TabItem value="java">

```java
package org.example;

import io.appium.java_client.android.Activity;
import io.appium.java_client.android.AndroidDriver;
import io.github.selcukes.core.driver.DriverManager;
import io.github.selcukes.core.driver.GridRunner;
import io.github.selcukes.core.enums.DeviceType;
import io.github.selcukes.core.enums.SwipeDirection;
import io.github.selcukes.core.page.MobilePage;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;


public class MobileTest {
    MobilePage page;

    @BeforeMethod
    void beforeTest() {
        GridRunner.startAppiumServer();
        WebDriver driver = DriverManager.createDriver(DeviceType.MOBILE);
        page = new MobilePage(driver);

    }

    @Test
    public void expandAndScrollScreenTest() {
        page.tap("Views")
                .tap("Expandable Lists")
                .tap("3. Simple Adapter")
                .swipe(By.xpath("//android.widget.TextView[@text='Group 18']"), SwipeDirection.DOWN)
                .tap(By.xpath("//android.widget.TextView[@text='Group 18']"))
                .swipe(By.xpath("//android.widget.TextView[@text='Child 13']"), SwipeDirection.DOWN)
                .swipe(By.xpath("//android.widget.TextView[@text='Group 1']"), SwipeDirection.UP);

    }

    @AfterMethod
    void afterTest() {
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
