export const Experience = () => {
 return (
 <article className='max-w-4xl mx-auto'>
 <h1 className='text-center font-mono text-5xl py-10 mb-4'>Work Experience</h1>

 <section>
 <h2>Specialty Manufacturing Quality Control QR Code Scanner</h2>
 <p></p>
 <p>The customer can scan the QR code on the bottle in an app on their phone, and it will open a link where they can put in there personal information (most likely already linked to an account) and information about the sample that are mailing in. This system removes the need for the customer to fill out a paper form that would also be mailed in with the sample and manually reviewed in the laboratory.</p> 

 <h3>The Problem</h3>
 <p>The individual unique URL's for the QR code are created by our customer and sent to use in batches up to 100,000 at a time in the form of an excel spreadsheet. This spreadsheet is then sent to our label make to create the QR codes and labels that are affixed to the bottles in our manufacturing facility. There had been an issue where there was a mix-up in communication with our printer, and the same excel spreadsheet was used twice, thus creating an entire batch of duplicate barcodes. These codes are unique and can only be used once, so an entire batch of sample kits were sent out that could not be used.</p>

 <h3>The Solution</h3>
 <p>I created a Web application that allows us to upload the newest batch of numbers into a database. This database will be the single source of truth for the current batch of qr codes, as well as a history of all previous qr codes.</p>
 <p>This web application can then be ran on a computer connected to a barcode scanner and a sensor on the conveyor line where the labels are being affixed to the bottles before packaging. Every time a bottle passes the sensor before the label is affixed to the bottle, the QR code is scanned by a QR code reader and submitted to the database to check and make sure that number exists in the table. Once it verifies it is an accurate QR code for that program, it then checks to make sure if that QR code has been scanned previously. If either of those tests fail, it will stop the conveyor line and alert an employee that a duplicate barcode has been detected, or that the scanned barcode is not in the database.</p>

 <h3>Extra Features</h3>
 <p>More and more laboratories are switching to a QR code system, or current labs are adding new programs that have their own specific codes. I wanted to create an app that makes it easy for the user to add new programs, as well as upload new sets of QR codes to existing programs.</p>
 <p>The previous simple frontend for checking QR codes quickly evolved into a full React application that could accessed from either the conveyor line to pick the program that was currently being assembled, or from the users desktop computer to add new QR codes to the database and create new programs.</p>

 <h3>Tech Stack</h3>
 </section>
 </article>
 )
}