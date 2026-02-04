const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  
  console.log('🔍 Starting Front-End Audit of Playbook MPR Website...\n');
  
  // Navigate to the site
  const siteUrl = 'https://vcard.playbookmpr.com/';
  console.log(`📡 Navigating to: ${siteUrl}`);
  await page.goto(siteUrl, { waitUntil: 'networkidle' });
  
  // Wait for page to fully load
  await page.waitForTimeout(2000);
  
  console.log('\n✅ Page Loaded\n');
  console.log('='.repeat(60));
  
  // 1. Check if profile image is visible
  console.log('\n1. PROFILE IMAGE CHECK');
  console.log('-'.repeat(60));
  const profileImages = await page.locator('img[alt*="Kayah"], img[src*="kayah profile"]').all();
  if (profileImages.length > 0) {
    console.log(`✅ Found ${profileImages.length} profile image(s)`);
    for (let i = 0; i < profileImages.length; i++) {
      const img = profileImages[i];
      const isVisible = await img.isVisible();
      const src = await img.getAttribute('src');
      const alt = await img.getAttribute('alt');
      const boundingBox = await img.boundingBox();
      
      console.log(`   Image ${i + 1}:`);
      console.log(`   - Visible: ${isVisible ? '✅ YES' : '❌ NO'}`);
      console.log(`   - Source: ${src}`);
      console.log(`   - Alt text: ${alt || 'MISSING'}`);
      if (boundingBox) {
        console.log(`   - Size: ${Math.round(boundingBox.width)}x${Math.round(boundingBox.height)}px`);
        console.log(`   - Position: x=${Math.round(boundingBox.x)}, y=${Math.round(boundingBox.y)}`);
      }
    }
  } else {
    console.log('❌ No profile images found!');
  }
  
  // 2. Check dark/light mode switcher
  console.log('\n2. DARK/LIGHT MODE SWITCHER');
  console.log('-'.repeat(60));
  const darkLightSwitcher = page.locator('.rts-dark-light');
  const isSwitcherVisible = await darkLightSwitcher.isVisible();
  console.log(`Switcher visible: ${isSwitcherVisible ? '✅ YES' : '❌ NO'}`);
  
  if (isSwitcherVisible) {
    const darkBtn = page.locator('.go-dark-w, .rts-go-dark');
    const lightBtn = page.locator('.go-light-w, .rts-go-light');
    
    const darkBtnVisible = await darkBtn.first().isVisible();
    const lightBtnVisible = await lightBtn.first().isVisible();
    
    console.log(`Dark button visible: ${darkBtnVisible ? '✅ YES' : '❌ NO'}`);
    console.log(`Light button visible: ${lightBtnVisible ? '✅ YES' : '❌ NO'}`);
    
    // Test clicking dark mode
    try {
      console.log('\n   Testing Dark Mode Toggle...');
      await darkBtn.first().click();
      await page.waitForTimeout(500);
      const htmlClasses = await page.evaluate(() => document.documentElement.className);
      console.log(`   HTML classes after dark click: ${htmlClasses}`);
      console.log(`   Contains 'rts-dark': ${htmlClasses.includes('rts-dark') ? '✅ YES' : '❌ NO'}`);
    } catch (e) {
      console.log(`   ❌ Error testing dark mode: ${e.message}`);
    }
    
    // Test clicking light mode
    try {
      console.log('\n   Testing Light Mode Toggle...');
      await lightBtn.first().click();
      await page.waitForTimeout(500);
      const htmlClasses = await page.evaluate(() => document.documentElement.className);
      console.log(`   HTML classes after light click: ${htmlClasses}`);
      console.log(`   Contains 'rts-light-mood': ${htmlClasses.includes('rts-light-mood') ? '✅ YES' : '❌ NO'}`);
    } catch (e) {
      console.log(`   ❌ Error testing light mode: ${e.message}`);
    }
  }
  
  // 3. Check hero section content
  console.log('\n3. HERO SECTION');
  console.log('-'.repeat(60));
  const heroTitle = page.locator('.rts_hero__title, h1');
  const heroSubtitle = page.locator('.hero__sub-title, .disc');
  
  const titleText = await heroTitle.first().textContent();
  const subtitleText = await heroSubtitle.first().textContent();
  
  console.log(`Title: ${titleText?.trim() || 'NOT FOUND'}`);
  console.log(`Subtitle: ${subtitleText?.trim() || 'NOT FOUND'}`);
  console.log(`Contains "Creative Solutions": ${titleText?.includes('Creative Solutions') ? '✅ YES' : '❌ NO'}`);
  console.log(`Contains "Alien Brains": ${subtitleText?.includes('Alien Brains') ? '✅ YES' : '❌ NO'}`);
  
  // 4. Check About section
  console.log('\n4. ABOUT SECTION');
  console.log('-'.repeat(60));
  const aboutSection = page.locator('#about, [id*="about"]');
  const aboutVisible = await aboutSection.first().isVisible();
  console.log(`About section visible: ${aboutVisible ? '✅ YES' : '❌ NO'}`);
  
  if (aboutVisible) {
    const aboutTitle = await page.locator('#about .title, #about h2').first().textContent();
    const aboutText = await page.locator('#about .disc, #about p').first().textContent();
    console.log(`About title: ${aboutTitle?.trim() || 'NOT FOUND'}`);
    console.log(`About text preview: ${aboutText?.substring(0, 100) || 'NOT FOUND'}...`);
    console.log(`Contains "Alien Brains": ${aboutTitle?.includes('Alien Brains') ? '✅ YES' : '❌ NO'}`);
  }
  
  // 5. Check services section
  console.log('\n5. SERVICES SECTION');
  console.log('-'.repeat(60));
  const servicesSection = page.locator('#services, [id*="service"]');
  const servicesVisible = await servicesSection.first().isVisible();
  console.log(`Services section visible: ${servicesVisible ? '✅ YES' : '❌ NO'}`);
  
  if (servicesVisible) {
    const serviceItems = await page.locator('.single-item-service-one, .service-item').count();
    console.log(`Number of services: ${serviceItems}`);
    
    // Check first service description
    const firstServiceDesc = await page.locator('.single-item-service-one .disc').first().textContent();
    console.log(`First service description preview: ${firstServiceDesc?.substring(0, 80) || 'NOT FOUND'}...`);
  }
  
  // 6. Check navigation
  console.log('\n6. NAVIGATION');
  console.log('-'.repeat(60));
  const navLinks = await page.locator('nav a, .navbar-nav a').all();
  console.log(`Number of nav links: ${navLinks.length}`);
  for (let i = 0; i < Math.min(navLinks.length, 5); i++) {
    const text = await navLinks[i].textContent();
    const href = await navLinks[i].getAttribute('href');
    console.log(`   - ${text?.trim()}: ${href}`);
  }
  
  // 7. Check for console errors
  console.log('\n7. CONSOLE ERRORS');
  console.log('-'.repeat(60));
  const errors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') {
      errors.push(msg.text());
    }
  });
  await page.waitForTimeout(1000);
  if (errors.length > 0) {
    console.log(`❌ Found ${errors.length} console error(s):`);
    errors.slice(0, 5).forEach((err, i) => {
      console.log(`   ${i + 1}. ${err}`);
    });
  } else {
    console.log('✅ No console errors found');
  }
  
  // 8. Check page performance
  console.log('\n8. PERFORMANCE METRICS');
  console.log('-'.repeat(60));
  const performanceTiming = await page.evaluate(() => {
    const perf = performance.timing;
    return {
      loadTime: perf.loadEventEnd - perf.navigationStart,
      domContentLoaded: perf.domContentLoadedEventEnd - perf.navigationStart,
      firstPaint: performance.getEntriesByType('paint')[0]?.startTime || 0
    };
  });
  console.log(`Page load time: ${performanceTiming.loadTime}ms`);
  console.log(`DOM content loaded: ${performanceTiming.domContentLoaded}ms`);
  console.log(`First paint: ${performanceTiming.firstPaint}ms`);
  
  // 9. Take screenshot
  console.log('\n9. SCREENSHOT');
  console.log('-'.repeat(60));
  await page.screenshot({ path: 'audit-screenshot.png', fullPage: true });
  console.log('✅ Screenshot saved as audit-screenshot.png');
  
  // 10. Check responsive design
  console.log('\n10. RESPONSIVE DESIGN CHECK');
  console.log('-'.repeat(60));
  const viewports = [
    { name: 'Mobile', width: 375, height: 667 },
    { name: 'Tablet', width: 768, height: 1024 },
    { name: 'Desktop', width: 1920, height: 1080 }
  ];
  
  for (const viewport of viewports) {
    await page.setViewportSize({ width: viewport.width, height: viewport.height });
    await page.waitForTimeout(500);
    
    const profileVisible = await page.locator('img[src*="kayah profile"]').first().isVisible().catch(() => false);
    console.log(`${viewport.name} (${viewport.width}x${viewport.height}): Profile image visible: ${profileVisible ? '✅ YES' : '❌ NO'}`);
  }
  
  // Reset to desktop
  await page.setViewportSize({ width: 1920, height: 1080 });
  
  console.log('\n' + '='.repeat(60));
  console.log('✅ AUDIT COMPLETE');
  console.log('='.repeat(60));
  
  await browser.close();
})();
