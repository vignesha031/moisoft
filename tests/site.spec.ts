import {test,expect} from '@playwright/test';
test('navigation, comparison, gallery, FAQ, links and enquiry',async({page})=>{
 const errors:string[]=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto('/');await expect(page.locator('h1')).toBeVisible();
 const missing=await page.locator('a[href^="#"]').evaluateAll(links=>links.map(a=>a.getAttribute('href')!).filter(h=>h.length>1&&!document.querySelector(h)));expect(missing).toEqual([]);
 await page.getByRole('slider').fill('75');await expect(page.getByRole('slider')).toHaveAttribute('aria-valuetext','75% notebook, 25% digital records');
 await page.getByRole('button',{name:'Weddings',exact:true}).click();await expect(page.locator('#gallery .gallery-card')).toHaveCount(2);
 await page.locator('#gallery .gallery-card').first().click();await expect(page.getByRole('dialog')).toBeVisible();await page.keyboard.press('ArrowRight');await expect(page.getByRole('dialog').getByRole('heading')).toHaveText('The team at work');await page.keyboard.press('Escape');await expect(page.getByRole('dialog')).toHaveCount(0);
 await page.locator('.faq-item button').first().click();await expect(page.locator('.faq-item button').first()).toHaveAttribute('aria-expanded','true');
 await page.getByRole('button',{name:'Continue on WhatsApp'}).click();await expect(page.locator('.error')).toHaveCount(7);
 await page.locator('#name').fill('Test family');await page.locator('#phone').fill('9944138970');await page.locator('#functionType').selectOption('Wedding');await page.locator('#date').fill('2099-12-31');await page.locator('#time').fill('09:30');await page.locator('input[name="weddingSide"][value="groom"]').check();await page.locator('#location').fill('Madurai & Theni');await page.locator('#invitationCount').fill('1000');
 await page.route('https://wa.me/**',route=>route.fulfill({status:200,body:'Prepared WhatsApp handoff — test intercepted, nothing sent.'}));
 await page.getByRole('button',{name:'Continue on WhatsApp'}).click();await page.waitForURL('https://wa.me/**');const enquiry=new URL(page.url()).searchParams.get('text')!;expect(enquiry).toContain('Madurai & Theni');expect(enquiry).toContain('Muhurtam / Event Time: 9:30 AM');expect(enquiry).toContain('Wedding Side: மாப்பிள்ளை வீட்டார்');expect(enquiry).toContain('Invitation Count: 1,000');expect(errors).toEqual([]);
});
test('responsive layout, equal leadership cards and reduced motion',async({page})=>{
 await page.emulateMedia({reducedMotion:'reduce'});await page.goto('/');
 for(const width of [1440,1024,768,390,320]){await page.setViewportSize({width,height:900});await expect(page.locator('h1')).toBeVisible();expect(await page.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth)).toBe(true);}
 await page.setViewportSize({width:1440,height:1000});const cards=await page.locator('.leader').evaluateAll(els=>els.map(e=>Math.round(e.getBoundingClientRect().height)));expect(new Set(cards).size).toBe(1);
 expect(await page.evaluate(()=>getComputedStyle(document.documentElement).scrollBehavior)).toBe('auto');
 await page.setViewportSize({width:390,height:844});await page.getByRole('button',{name:'Open navigation'}).click();await expect(page.getByRole('dialog')).toBeVisible();await page.keyboard.press('Escape');await expect(page.getByRole('dialog')).toHaveCount(0);
 await page.getByRole('button',{name:'Open navigation'}).click();await page.getByRole('navigation',{name:'Mobile navigation'}).getByRole('link',{name:'Services'}).click();await expect(page.getByRole('dialog')).toHaveCount(0);
 // Load offscreen images before checking them; native lazy loading defers them.
 await page.locator('img').evaluateAll(async imgs=>{await Promise.all(imgs.map(async img=>{if(img instanceof HTMLImageElement){img.loading='eager';await img.decode();}}));});
 expect(await page.locator('img').evaluateAll(imgs=>imgs.every(i=>i instanceof HTMLImageElement&&i.complete&&i.naturalWidth>0))).toBe(true);
});
test('comparison presets, keyboard and captured drag',async({page})=>{
 await page.emulateMedia({reducedMotion:'reduce'});await page.goto('/');
 const modes=page.locator('.comparison-modes');const slider=page.getByRole('slider');
 await modes.getByRole('button',{name:'Digital',exact:true}).click();await expect(slider).toHaveValue('0');
 await modes.getByRole('button',{name:'Notebook',exact:true}).click();await expect(slider).toHaveValue('100');
 await modes.getByRole('button',{name:'Compare',exact:true}).click();await expect(slider).toHaveValue('50');
 await slider.focus();await page.keyboard.press('ArrowRight');await expect(slider).toHaveValue('51');
 const stage=page.locator('.compare-stage');await stage.scrollIntoViewIfNeeded();const box=(await stage.boundingBox())!;
 await page.mouse.move(box.x+box.width*.5,box.y+box.height*.5);await page.mouse.down();await page.mouse.move(box.x+box.width*.75,box.y+box.height*.5);await page.mouse.up();await expect(slider).toHaveValue('75');
 await page.mouse.move(box.x+box.width*.2,box.y+box.height*.5);await expect(slider).toHaveValue('75');
});
