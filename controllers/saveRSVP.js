const Contact = require('../models/Contact')
const path = require('path')
const dotenv = require('dotenv')
const sendEmail = require('../utils/sendEmail')

//@desc Save Guest Details
//@route POST /save
//@access Public
exports.saveGuestDetails = async (req, res) => {
    try {
        const contact = await Contact.create(req.body);
        console.log(req.body.name);
        console.log(req.body.email);

            //Send Email
            if (Object.keys(req.body.email).length === 0) {
                return res.redirect('/');
            }
            else if(req.body.email !== null){
            await sendEmail({
                to: req.body.email,
                subject: `Wedding Invitation - Lavish & Preksha`,
                html: `<!DOCTYPE html>
                <html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
                <head>
            
                                <title></title>
                
                                <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
                
                                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                
                                <!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]-->
                
                                <!--[if !mso]><!-->
                
                                <link href="https://fonts.googleapis.com/css?family=Cormorant+Garamond" rel="stylesheet" type="text/css">
                
                                <!--<![endif]-->
                
                                <style>
                
                                                * {
                
                                                                box-sizing: border-box;
                
                                                }
                
                 
                
                                                body {
                
                                                                margin: 0;
                
                                                                padding: 0;
                
                                                }
                
                 
                
                                                a[x-apple-data-detectors] {
                
                                                                color: inherit !important;
                
                                                                text-decoration: inherit !important;
                
                                                }
                
                 
                
                                                #MessageViewBody a {
                
                                                                color: inherit;
                
                                                                text-decoration: none;
                
                                                }
                
                 
                
                                                p {
                
                                                                line-height: inherit
                
                                                }
                
                 
                
                                                .desktop_hide,
                
                                                .desktop_hide table {
                
                                                                mso-hide: all;
                
                                                                display: none;
                
                                                                max-height: 0px;
                
                                                                overflow: hidden;
                
                                                }
                
                 
                
                                                @media (max-width:700px) {
                
                                                                .desktop_hide table.icons-inner {
                
                                                                                display: inline-block !important;
                
                                                                }
                
                 
                
                                                                .icons-inner {
                
                                                                                text-align: center;
                
                                                                }
                
                 
                
                                                                .icons-inner td {
                
                                                                                margin: 0 auto;
                
                                                                }
                
                 
                
                                                                .row-content {
                
                                                                                width: 100% !important;
                
                                                                }
                
                 
                
                                                                .mobile_hide {
                
                                                                                display: none;
                
                                                                }
                
                 
                
                                                                .stack .column {
                
                                                                                width: 100%;
                
                                                                                display: block;
                
                                                                }
                
                 
                
                                                                .mobile_hide {
                
                                                                                min-height: 0;
                
                                                                                max-height: 0;
                
                                                                                max-width: 0;
                
                                                                                overflow: hidden;
                
                                                                                font-size: 0px;
                
                                                                }
                
                 
                
                                                                .desktop_hide,
                
                                                                .desktop_hide table {
                
                                                                                display: table !important;
                
                                                                                max-height: none !important;
                
                                                                }
                
                                                }
                
                                </style>
                
                </head>
                
                 
                
                <body style="margin: 0; background-color: #fff9f6; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
                
                                <table class="nl-container" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fff9f6;">
                
                                                <tbody>
                
                                                                <tr>
                
                                                                                <td>
                
                                                                                                <table class="row row-1" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fff9f6;">
                
                                                                                                                <tbody>
                
                                                                                                                                <tr>
                
                                                                                                                                                <td>
                
                                                                                                                                                                <table class="row-content" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fff9f6; color: #000000; width: 680px;" width="680">
                
                                                                                                                                                                                <tbody>
                
                                                                                                                                                                                                <tr>
                
                                                                                                                                                                                                                <td class="column column-1" width="50%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                
                                                                                                                                                                                                                                <table class="image_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                
                                                                                                                                                                                                                                                <tr>
                
                                                                                                                                                                                                                                                                <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;padding-top:5px;padding-bottom:5px;">
                
                                                                                                                                                                                                                                                                                <div class="alignment" align="center" style="line-height:10px"><a href="www.example.com" target="_blank" style="outline:none" tabindex="-1"><img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/5946/9f581591-4c77-4be1-9f21-c7df4fac9189.png" style="display: block; height: auto; border: 0; width: 340px; max-width: 100%;" width="340" alt="garland" title="garland"></a></div>
                
                                                                                                                                                                                                                                                                </td>
                
                                                                                                                                                                                                                                                </tr>
                
                                                                                                                                                                                                                                </table>
                
                                                                                                                                                                                                                </td>
                
                                                                                                                                                                                                                <td class="column column-2" width="50%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                
                                                                                                                                                                                                                                <table class="image_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                
                                                                                                                                                                                                                                                <tr>
                
                                                                                                                                                                                                                                                                <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;padding-top:5px;padding-bottom:5px;">
                
                                                                                                                                                                                                                                                                                <div class="alignment" align="center" style="line-height:10px"><a href="www.example.com" target="_blank" style="outline:none" tabindex="-1"><img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/5946/007d3786-dffe-49a4-8cd2-df9d2139e4ec.png" style="display: block; height: auto; border: 0; width: 340px; max-width: 100%;" width="340" alt="garland" title="garland"></a></div>
                
                                                                                                                                                                                                                                                                </td>
                
                                                                                                                                                                                                                                                </tr>
                
                                                                                                                                                                                                                                </table>
                
                                                                                                                                                                                                                </td>
                
                                                                                                                                                                                                </tr>
                
                                                                                                                                                                                </tbody>
                
                                                                                                                                                                </table>
                
                                                                                                                                                </td>
                
                                                                                                                                </tr>
                
                                                                                                                </tbody>
                
                                                                                                </table>
                
                                                                                                <table class="row row-2" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                
                                                                                                                <tbody>
                
                                                                                                                                <tr>
                
                                                                                                                                                <td>
                
                                                                                                                                                                <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fff9f6; color: #000000; width: 680px;" width="680">
                
                                                                                                                                                                                <tbody>
                
                                                                                                                                                                                                <tr>
                
                                                                                                                                                                                                                <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                
                                                                                                                                                                                                                                <table class="text_block block-1" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                
                                                                                                                                                                                                                                                <tr>
                
                                                                                                                                                                                                                                                                <td class="pad">
                
                                                                                                                                                                                                                                                                                <div style="font-family: 'Times New Roman', serif">
                
                                                                                                                                                                                                                                                                                                <div class style="font-size: 14px; mso-line-height-alt: 16.8px; color: #6b7066; line-height: 1.2; font-family: 'Cormorant Garamond', 'Times New Roman', Times, serif;">
                
                                                                                                                                                                                                                                                                                                                <p style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 16.8px;"><span style="font-size:22px;">Save the Date</span></p>
                
                                                                                                                                                                                                                                                                                                </div>
                
                                                                                                                                                                                                                                                                                </div>
                
                                                                                                                                                                                                                                                                </td>
                
                                                                                                                                                                                                                                                </tr>
                
                                                                                                                                                                                                                                </table>
                
                                                                                                                                                                                                                </td>
                
                                                                                                                                                                                                </tr>
                
                                                                                                                                                                                </tbody>
                
                                                                                                                                                                </table>
                
                                                                                                                                                </td>
                
                                                                                                                                </tr>
                
                                                                                                                </tbody>
                
                                                                                                </table>
                
                                                                                                <table class="row row-3" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                
                                                                                                                <tbody>
                
                                                                                                                                <tr>
                
                                                                                                                                                <td>
                
                                                                                                                                                                <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fff9f6; color: #000000; width: 680px;" width="680">
                
                                                                                                                                                                                <tbody>
                
                                                                                                                                                                                                <tr>
                
                                                                                                                                                                                                                <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                
                                                                                                                                                                                                                                <table class="heading_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                
                                                                                                                                                                                                                                                <tr>
                
                                                                                                                                                                                                                                                                <td class="pad" style="padding-bottom:30px;text-align:center;width:100%;">
                
                                                                                                                                                                                                                                                                                <h1 style="margin: 0; color: #6b7066; direction: ltr; font-family: 'Cormorant Garamond', 'Times New Roman', Times, serif; font-size: 50px; font-weight: 400; letter-spacing: 1px; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0;"><span class="tinyMce-placeholder">Lavish</span></h1>
                
                                                                                                                                                                                                                                                                </td>
                
                                                                                                                                                                                                                                                </tr>
                
                                                                                                                                                                                                                                </table>
                
                                                                                                                                                                                                                                <table class="image_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                
                                                                                                                                                                                                                                                <tr>
                
                                                                                                                                                                                                                                                                <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
                
                                                                                                                                                                                                                                                                                <div class="alignment" align="center" style="line-height:10px"><a href="www.example.com" target="_blank" style="outline:none" tabindex="-1"><img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/5946/4198748a-9347-4eb4-a52f-c481236e7b83.png" style="display: block; height: auto; border: 0; width: 272px; max-width: 100%;" width="272" alt="ampersand" title="ampersand"></a></div>
                
                                                                                                                                                                                                                                                                </td>
                
                                                                                                                                                                                                                                                </tr>
                
                                                                                                                                                                                                                                </table>
                
                                                                                                                                                                                                                                <table class="heading_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                
                                                                                                                                                                                                                                                <tr>
                
                                                                                                                                                                                                                                                                <td class="pad" style="padding-top:30px;text-align:center;width:100%;">
                
                                                                                                                                                                                                                                                                                <h1 style="margin: 0; color: #6b7066; direction: ltr; font-family: 'Cormorant Garamond', 'Times New Roman', Times, serif; font-size: 50px; font-weight: 400; letter-spacing: 1px; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0;"><span class="tinyMce-placeholder">Preksha</span></h1>
                
                                                                                                                                                                                                                                                                </td>
                
                                                                                                                                                                                                                                                </tr>
                
                                                                                                                                                                                                                                </table>
                
                                                                                                                                                                                                                </td>
                
                                                                                                                                                                                                </tr>
                
                                                                                                                                                                                </tbody>
                
                                                                                                                                                                </table>
                
                                                                                                                                                </td>
                
                                                                                                                                </tr>
                
                                                                                                                </tbody>
                
                                                                                                </table>
                
                                                                                                <table class="row row-4" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                
                                                                                                                <tbody>
                
                                                                                                                                <tr>
                
                                                                                                                                                <td>
                
                                                                                                                                                                <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fff9f6; color: #000000; width: 680px;" width="680">
                
                                                                                                                                                                                <tbody>
                
                                                                                                                                                                                                <tr>
                
                                                                                                                                                                                                                <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                
                                                                                                                                                                                                                                <table class="text_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                
                                                                                                                                                                                                                                                <tr>
                
                                                                                                                                                                                                                                                                <td class="pad" style="padding-bottom:40px;padding-left:50px;padding-right:50px;padding-top:25px;">
                
                                                                                                                                                                                                                                                                                <div style="font-family: 'Times New Roman', serif">
                
                                                                                                                                                                                                                                                                                                <div class style="font-size: 14px; mso-line-height-alt: 16.8px; color: #6b7066; line-height: 1.2; font-family: 'Cormorant Garamond', 'Times New Roman', Times, serif;">
                
                                                                                                                                                                                                                                                                                                                <p style="margin: 0; font-size: 22px; text-align: center; mso-line-height-alt: 26.4px;"><span style="font-size:22px;">Would love for you to join them in their </span></p>
                
                                                                                                                                                                                                                                                                                                                <p style="margin: 0; font-size: 22px; text-align: center; mso-line-height-alt: 26.4px;"><span style="font-size:22px;">celebration of their wedding</span></p>
                
                                                                                                                                                                                                                                                                                                </div>
                
                                                                                                                                                                                                                                                                                </div>
                
                                                                                                                                                                                                                                                                </td>
                
                                                                                                                                                                                                                                                </tr>
                
                                                                                                                                                                                                                                </table>
                
                                                                                                                                                                                                                </td>
                
                                                                                                                                                                                                </tr>
                
                                                                                                                                                                                </tbody>
                
                                                                                                                                                                </table>
                
                                                                                                                                                </td>
                
                                                                                                                                </tr>
                
                                                                                                                </tbody>
                
                                                                                                </table>
                
                                                                                                <table class="row row-5" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                
                                                                                                                <tbody>
                
                                                                                                                                <tr>
                
                                                                                                                                                <td>
                
                                                                                                                                                                <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fff9f6; color: #000000; width: 680px;" width="680">
                
                                                                                                                                                                                <tbody>
                
                                                                                                                                                                                                <tr>
                
                                                                                                                                                                                                                <td class="column column-1" width="50%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                
                                                                                                                                                                                                                                <table class="heading_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                
                                                                                                                                                                                                                                                <tr>
                
                                                                                                                                                                                                                                                                <td class="pad" style="padding-bottom:10px;text-align:center;width:100%;padding-top:5px;">
                
                                                                                                                                                                                                                                                                                <h1 style="margin: 0; color: #6b7066; direction: ltr; font-family: 'Cormorant Garamond', 'Times New Roman', Times, serif; font-size: 30px; font-weight: 400; letter-spacing: 1px; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0;"><strong>When</strong></h1>
                
                                                                                                                                                                                                                                                                </td>
                
                                                                                                                                                                                                                                                </tr>
                
                                                                                                                                                                                                                                </table>
                
                                                                                                                                                                                                                                <table class="image_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                
                                                                                                                                                                                                                                                <tr>
                
                                                                                                                                                                                                                                                                <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
                
                                                                                                                                                                                                                                                                                <div class="alignment" align="center" style="line-height:10px"><a href="www.example.com" target="_blank" style="outline:none" tabindex="-1"><img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/5946/74be5b1c-0997-4b28-ad71-5f0453dbe3c6.png" style="display: block; height: auto; border: 0; width: 340px; max-width: 100%;" width="340" alt="divider" title="divider"></a></div>
                
                                                                                                                                                                                                                                                                </td>
                
                                                                                                                                                                                                                                                </tr>
                
                                                                                                                                                                                                                                </table>
                
                                                                                                                                                                                                                                <table class="text_block block-4" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                
                                                                                                                                                                                                                                                <tr>
                
                                                                                                                                                                                                                                                                <td class="pad" style="padding-bottom:15px;padding-left:10px;padding-right:10px;padding-top:10px;">
                
                                                                                                                                                                                                                                                                                <div style="font-family: 'Times New Roman', serif">
                
                                                                                                                                                                                                                                                                                                <div class style="font-size: 14px; font-family: 'Cormorant Garamond', 'Times New Roman', Times, serif; mso-line-height-alt: 25.2px; color: #6b7066; line-height: 1.8;">
                
                                                                                                                                                                                                                                                                                                                <p style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 36px; letter-spacing: 1px;"><span style="font-size:20px;"></span></p>
                
                                                                                                                                                                                                                                                                                                                <p style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 36px; letter-spacing: 1px;"><span style="font-size:20px;">November 25 & 26, 2022</span></p>
                
                                                                                                                                                                                                                                                                                                </div>
                
                                                                                                                                                                                                                                                                                </div>
                
                                                                                                                                                                                                                                                                </td>
                
                                                                                                                                                                                                                                                </tr>
                
                                                                                                                                                                                                                                </table>
                
                                                                                                                                                                                                                </td>
                
                                                                                                                                                                                                                <td class="column column-2" width="50%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                
                                                                                                                                                                                                                                <table class="heading_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                
                                                                                                                                                                                                                                                <tr>
                
                                                                                                                                                                                                                                                                <td class="pad" style="padding-bottom:10px;text-align:center;width:100%;padding-top:5px;">
                
                                                                                                                                                                                                                                                                                <h1 style="margin: 0; color: #6b7066; direction: ltr; font-family: 'Cormorant Garamond', 'Times New Roman', Times, serif; font-size: 30px; font-weight: normal; letter-spacing: 1px; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0;"><strong>Where</strong></h1>
                
                                                                                                                                                                                                                                                                </td>
                
                                                                                                                                                                                                                                                </tr>
                
                                                                                                                                                                                                                                </table>
                
                                                                                                                                                                                                                                <table class="image_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                
                                                                                                                                                                                                                                                <tr>
                
                                                                                                                                                                                                                                                                <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
                
                                                                                                                                                                                                                                                                                <div class="alignment" align="center" style="line-height:10px"><a href="www.example.com" target="_blank" style="outline:none" tabindex="-1"><img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/5946/74be5b1c-0997-4b28-ad71-5f0453dbe3c6.png" style="display: block; height: auto; border: 0; width: 340px; max-width: 100%;" width="340" alt="divider" title="divider"></a></div>
                
                                                                                                                                                                                                                                                                </td>
                
                                                                                                                                                                                                                                                </tr>
                
                                                                                                                                                                                                                                </table>
                
                                                                                                                                                                                                                                <table class="text_block block-4" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                
                                                                                                                                                                                                                                                <tr>
                
                                                                                                                                                                                                                                                                <td class="pad" style="padding-bottom:15px;padding-left:10px;padding-right:10px;padding-top:10px;">
                
                                                                                                                                                                                                                                                                                <div style="font-family: 'Times New Roman', serif">
                
                                                                                                                                                                                                                                                                                                <div class style="font-size: 14px; mso-line-height-alt: 25.2px; color: #6b7066; line-height: 1.8; font-family: 'Cormorant Garamond', 'Times New Roman', Times, serif;">
                
                                                                                                                                                                                                                                                                                                                <p style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 25.2px; letter-spacing: 1px;"><span style="color:#898989;"><a href="https://g.page/SimchaIsland?share" target="_blank" style="text-decoration:underline;color:#898989;" rel="noopener"><span style="font-size:20px;">Simcha Island Adventure Park & Resort,</span><span style="font-size:20px;">Indore</span></a></span></p>
                
                                                                                                                                                                                                                                                                                                </div>
                
                                                                                                                                                                                                                                                                                </div>
                
                                                                                                                                                                                                                                                                </td>
                
                                                                                                                                                                                                                                                </tr>
                
                                                                                                                                                                                                                                </table>
                
                                                                                                                                                                                                                </td>
                
                                                                                                                                                                                                </tr>
                
                                                                                                                                                                                </tbody>
                
                                                                                                                                                                </table>
                
                                                                                                                                                </td>
                
                                                                                                                                </tr>
                
                                                                                                                </tbody>
                
                                                                                                </table>
                
                                                                                                <table class="row row-6" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                
                                                                                                                <tbody>
                
                                                                                                                                <tr>
                
                                                                                                                                                <td>
                
                                                                                                                                                                <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fff9f6; color: #000000; width: 680px;" width="680">
                
                                                                                                                                                                                <tbody>
                
                                                                                                                                                                                                <tr>
                
                                                                                                                                                                                                                <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                
                                                                                                                                                                                                                                <div class="spacer_block" style="height:60px;line-height:30px;font-size:1px;">&#8202;</div>
                
                                                                                                                                                                                                                </td>
                
                                                                                                                                                                                                </tr>
                
                                                                                                                                                                                </tbody>
                
                                                                                                                                                                </table>
                
                                                                                                                                                </td>
                
                                                                                                                                </tr>
                
                                                                                                                </tbody>
                
                                                                                                </table>
                
                                                                                                <table class="row row-7" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fff9f6;">
                
                                                                                                                <tbody>
                
                                                                                                                                <tr>
                
                                                                                                                                                <td>
                
                                                                                                                                                                <table class="row-content" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fff9f6; color: #000000; width: 680px;" width="680">
                
                                                                                                                                                                                <tbody>
                
                                                                                                                                                                                                <tr>
                
                                                                                                                                                                                                                <td class="column column-1" width="50%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                
                                                                                                                                                                                                                                <table class="image_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                
                                                                                                                                                                                                                                                <tr>
                
                                                                                                                                                                                                                                                                <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;padding-top:5px;padding-bottom:25px;">
                
                                                                                                                                                                                                                                                                                <div class="alignment" align="center" style="line-height:10px"><a href="www.example.com" target="_blank" style="outline:none" tabindex="-1"><img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/5946/8d11a2dd-dbcc-485d-85a9-dbc3f3ff4c3f.png" style="display: block; height: auto; border: 0; width: 340px; max-width: 100%;" width="340" alt="garland" title="garland"></a></div>
                
                                                                                                                                                                                                                                                                </td>
                
                                                                                                                                                                                                                                                </tr>
                
                                                                                                                                                                                                                                </table>
                
                                                                                                                                                                                                                </td>
                
                                                                                                                                                                                                                <td class="column column-2" width="50%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                
                                                                                                                                                                                                                                <table class="image_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                
                                                                                                                                                                                                                                                <tr>
                
                                                                                                                                                                                                                                                                <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;padding-top:5px;padding-bottom:5px;">
                
                                                                                                                                                                                                                                                                                <div class="alignment" align="center" style="line-height:10px"><a href="www.example.com" target="_blank" style="outline:none" tabindex="-1"><img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/5946/ee2b7d31-81a4-4898-afa0-9c10ca0de762.png" style="display: block; height: auto; border: 0; width: 340px; max-width: 100%;" width="340" alt="garland" title="garland"></a></div>
                
                                                                                                                                                                                                                                                                </td>
                
                                                                                                                                                                                                                                                </tr>
                
                                                                                                                                                                                                                                </table>
                
                                                                                                                                                                                                                </td>
                
                                                                                                                                                                                                </tr>
                
                                                                                                                                                                                </tbody>
                
                                                                                                                                                                </table>
                
                                                                                                                                                </td>
                
                                                                                                                                </tr>
                
                                                                                                                </tbody>
                
                                                                                                </table>
                
                                                                                                <table class="row row-8" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #6b7066;">
                
                                                                                                                <tbody>
                
                                                                                                                                <tr>
                
                                                                                                                                                <td>
                
                                                                                                                                                                <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; background-color: #6b7066; width: 680px;" width="680">
                
                                                                                                                                                                                <tbody>
                
                                                                                                                                                                                                <tr>
                
                                                                                                                                                                                                                <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                
                                                                                                                                                                                                                                <table class="empty_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                
                                                                                                                                                                                                                                                <tr>
                
                                                                                                                                                                                                                                                                <td class="pad">
                
                                                                                                                                                                                                                                                                                <div></div>
                
                                                                                                                                                                                                                                                                </td>
                
                                                                                                                                                                                                                                                </tr>
                
                                                                                                                                                                                                                                </table>
                
                                                                                                                                                                                                                </td>
                
                                                                                                                                                                                                </tr>
                
                                                                                                                                                                                </tbody>
                
                                                                                                                                                                </table>
                
                                                                                                                                                </td>
                
                                                                                                                                </tr>
                
                                                                                                                </tbody>
                
                                                                                                </table>
                
                                                                                                <table class="row row-9" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                
                                                                                                                <tbody>
                
                                                                                                                                <tr>
                
                                                                                                                                                <td>
                
                                                                                                                                                                <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 680px;" width="680">
                
                                                                                                                                                                                <tbody>
                
                                                                                                                                                                                                <tr>
                
                                                                                                                                                                                                                <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                
                                                                                                                                                                                                                                <table class="icons_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                
                                                                                                                                                                                                                                                <tr>
                
                                                                                                                                                                                                                                                                <td class="pad" style="vertical-align: middle; color: #9d9d9d; font-family: inherit; font-size: 15px; padding-bottom: 5px; padding-top: 5px; text-align: center;">
                
                                                                                                                                                                                                                                                                                <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                
                                                                                                                                                                                                                                                                                                <tr>
                
                                                                                                                                                                                                                                                                                                                <td class="alignment" style="vertical-align: middle; text-align: center;">
                
                                                                                                                                                                                                                                                                                                                                <!--[if vml]><table align="left" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"><![endif]-->
                
                                                                                                                                                                                                                                                                                                                                <!--[if !vml]><!-->
                
                                                                                                                                                                                                                                                                                                                                <table class="icons-inner" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block; margin-right: -4px; padding-left: 0px; padding-right: 0px;" cellpadding="0" cellspacing="0" role="presentation">
                
                                                                                                                                                                                                                                                                                                                                                <!--<![endif]-->
                
                
                
                                                                                                                                                                                                                                                                                                                                </table>
                
                                                                                                                                                                                                                                                                                                                </td>
                
                                                                                                                                                                                                                                                                                                </tr>
                
                                                                                                                                                                                                                                                                                </table>
                
                                                                                                                                                                                                                                                                </td>
                
                                                                                                                                                                                                                                                </tr>
                
                                                                                                                                                                                                                                </table>
                
                                                                                                                                                                                                                </td>
                
                                                                                                                                                                                                </tr>
                
                                                                                                                                                                                </tbody>
                
                                                                                                                                                                </table>
                
                                                                                                                                                </td>
                
                                                                                                                                </tr>
                
                                                                                                                </tbody>
                
                                                                                                </table>
                
                                                                                </td>
                
                                                                </tr>
                
                                                </tbody>
                                </table><!-- End -->
                </body>
                </html>`
            })

            // res.status(201).render('/');
            return res.redirect('/') 
            }
            else{
                return res.redirect('/') 
            }

    } 
    catch (err) {
        console.error(err)
        return res.status(400).json({ success: false, message: `Application Failed: ${err.message} Please try again!`})
    }
    
}