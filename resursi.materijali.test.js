
//Auth: Maja


'use strict';
var webdriver = require('selenium-webdriver');
//var chai = require('chai');
//var expect = require('chai');
var assert = require('assert');
var sinon = require ('sinon');
var {Builder, By, until} = require('selenium-webdriver');
var test = require('selenium-webdriver/testing');

 
 
var driver = new webdriver.Builder().forBrowser('chrome').build();
/*--------------------------------------------------------------------------*/

 test.describe('AgroLife: prijavljivanje na sistem\n', function() {

   test.it('prijavna forma ispravno popunjena', function() {
		driver.get('http://localhost:3000')
		//driver.get('http://agrolife.greensoft.co:3000')
		.then(_ => driver.findElement(By.id("textfield-1011-inputEl")).sendKeys("Miodrag"))
		.then(_ => driver.findElement(By.id("textfield-1012-inputEl")).sendKeys("Miodrag"))
		.then(_ => driver.findElement(By.id("textfield-1013-inputEl")).sendKeys("1243!"))
		.then(_ => driver.wait(until.elementLocated(By.id('button-1015-btnIconEl')), 2000).click())	
		});
		
	test.it('Prijava na sistem uspesna', function(){
		driver.wait(until.elementLocated(By.id('button-1230-btnIconEl')), 90000);
		});
    
	});

/* -------------------------------------------------------------------------- */

 test.describe('Materijali-window', function() {
     
	 test.it('Otvaranje prozora materijali', function() {
		driver.wait(until.elementLocated(By.id('button-1243-btnIconEl')), 1000)
        .then(_ => driver.findElement(By.id('button-1243-btnIconEl')).click())
		.then(_ => driver.findElement(By.id('menuitem-1247-itemEl')).click())
    
     });
 });


 test.describe('Unos grupe/podgrupe/materijal', function(){
	 
     test.it('Ispravni podaci grupe', function(){
        
		//Materijali grupa
		
		driver.wait(until.elementLocated(By.id('tab-1466-btnEl')), 10000).click()
		
        // Materijali-grupa/forma

        .then(_ => driver.findElement(By.id('textfield-1417-inputEl')).sendKeys('Maja grupa'))
        .then(_ => driver.findElement(By.id('textfield-1418-inputEl')).sendKeys('Maja ikonica'))
        .then(_ => driver.findElement(By.id('textfield-1419-inputEl')).sendKeys('Maja priotitet'))
        //.then(_ => driver.findElement(By.id('ext-gen5431')).click())
		
		 test.it('Korisnik dodao grupu materijala', function(){
		   driver.wait(until.elementLocated(By.id('button-1424-btnInnerEl')), 5000).click();
	   });
	  

     });

    test.it('Ispravni podaci podgrupe', function(){

        //Materijali-podgrupa/forma
		
		driver.wait(until.elementLocated(By.id('tab-1467-btnIconEl')),10000).click()
      
       .then(_ => driver.findElement(By.id('combo-1453-inputEl')).sendKeys('Maja grupa'))
       .then(_ => driver.findElement(By.id('textfield-1454-inputEl')).sendKeys('maja podgrupa'))
       .then(_ => driver.findElement(By.id('textfield-1455-inputEl')).sendKeys('majina ikona'))
       .then(_ => driver.findElement(By.id('textfield-1456-inputEl')).sendKeys('5'))
       .then(_ => driver.findElement(By.id('ext-gen5343')).click())
       
       //Dodaj

       test.it('Korisnik dodao podgrupu materijala', function(){
		   driver.wait(until.elementLocated(By.id('button-1461-btnIconEl')), 5000).click();
	   });
	  
       
	   //Sacuvaj izmene

       //Brisanje

     });

     test.it('Ispravni podaci materijal', function(){

        driver.wait(until.elementLocated(By.id('tab-1465-btnIconEl')),10000).click()

        // Materijali-forma

        .then(_ => driver.findElement(By.id('textfield-1374-inputEl')).sendKeys('789456'))
        .then(_ => driver.findElement(By.id('textfield-1375-inputEl')).sendKeys('maja materijal'))
        .then(_ => driver.findElement(By.id('numberfield-1376-inputEl')).sendKeys('100'))
		.then(_ => driver.findElement(By.id('combo-1377-inputEl')).sendKeys('Goriva i maziva'))
		.then(_ => driver.findElement(By.id('combo-1378-inputEl')).sendKeys('Gorivo'))
		.then(_ => driver.findElement(By.id('combo-1379-inputEl')).sendKeys('Kelj'))
		.then(_ => driver.findElement(By.id('textfield-1380-inputEl')).sendKeys('L'))
		
		test.it('Korisnik dodao materijal', function(){
		   driver.wait(until.elementLocated(By.id('button-1385-btnIconEl')), 5000).click();
        
     });
 });
 
});


test.describe('Odjavljivanje iz aplikacije', function(){
		
		test.it('odjavljivanje uspesno', function(){
			
		// Odjava iz aplikacije
		driver.findElement(By.id("button-1354-btnIconEl")).click()
		.then(_ => driver.findElement(By.id("button-1005-btnIconEl")).click())
		})
		
		test.it('Izlazak iz browsera', function(){
			
		// Zatvaranje browsera 
		driver.quit();
		})
		
	})