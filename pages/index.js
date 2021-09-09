
<html>
    <head>
        <title></title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- CSS -->
        <link rel="stylesheet" media="screen" href="polaris.css" />
        <link rel="stylesheet" media="screen" href="bootstrap.css" />
        <link rel="stylesheet" media="screen" href="shopify-css.css"/>
        <link rel="stylesheet" media="screen" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
        
        <!-- Js -->

        <script type="text/javascript" src="jquery-2.1.1.min.js"></script>
        <script src="https://cdn.shopify.com/s/assets/external/app.js"></script>
        <script type="text/javascript">
            ShopifyApp.init({
                forceRedirect: true,
                apiKey: '21b28b329b0663d87210b00a8a946229',
                shopOrigin: 'https://<?php echo $shop; ?>'
            });
            ShopifyApp.Bar.loadingOff();
        </script>
    </head>
    <body>
        <div class="Polaris-Page">
            <div class="Polaris-Page__Content">
                <div class="Polaris-Layout">

                    <!-- App general settings section start -->
                    <div class="Polaris-Layout__AnnotatedSection">
                        <div class="Polaris-Layout__AnnotationWrapper">
                            <div class="Polaris-Layout__Annotation">
                                <div class="Polaris-TextContainer">
                                    <h2 class="Polaris-Heading">General settings</h2>
                                    <p>Set app settings.</p>
                                </div>
                            </div>
                            <div class="Polaris-Layout__AnnotationContent">
                                <div id="errorMsgBlock" class="Polaris-Banner Polaris-Banner--statusCritical" tabindex="0" role="alert" aria-live="polite" aria-labelledby="errorBlockHeading" aria-describedby="errorBlockContent" style="display:none">
                                    <div class="Polaris-Banner__Ribbon"><span class="Polaris-Icon Polaris-Icon--colorRedDark Polaris-Icon--isColored Polaris-Icon--hasBackdrop"><svg class="Polaris-Icon__Svg" viewBox="0 0 20 20" focusable="false" aria-hidden="true"><g fill-rule="evenodd"><circle fill="currentColor" cx="10" cy="10" r="9"></circle><path d="M2 10c0-1.846.635-3.543 1.688-4.897l11.209 11.209A7.954 7.954 0 0 1 10 18c-4.411 0-8-3.589-8-8m14.312 4.897L5.103 3.688A7.954 7.954 0 0 1 10 2c4.411 0 8 3.589 8 8a7.952 7.952 0 0 1-1.688 4.897M0 10c0 5.514 4.486 10 10 10s10-4.486 10-10S15.514 0 10 0 0 4.486 0 10"></path></g></svg></span></div>
                                    <div>
                                        <div class="Polaris-Banner__Heading" id="errorBlockHeading">

                                        </div>
                                        <div class="Polaris-Banner__Content" id="errorBlockContent">

                                        </div>
                                    </div>
                                </div><br>
                                <div class="Polaris-Card">
                                    <div class="Polaris-Card__Section">
                                        <form id="settingFrm" name="settingFrm" method="post" action="">
                                            <div class="Polaris-FormLayout">
                                                <div class="Polaris-FormLayout__Item">
                                                    <fieldset class="Polaris-ChoiceList" id="ChoiceList17" aria-invalid="false" aria-describedby="ChoiceList17Error">
                                                        <legend class="Polaris-ChoiceList__Title">Facebook</legend>
                                                        <ul class="Polaris-ChoiceList__Choices" style="display: flex;">
                                                            <li class="social-icons logo-only" style="padding-right: 15px;">
                                                                <label class="Polaris-Choice" for="facebook">
                                                                    <span class="Polaris-Choice__Control">
                                                                        <span class="Polaris-RadioButton">
                                                                            <input id="facebook" name="facebook" type="radio" class="Polaris-RadioButton__Input" value="0" <?php echo $facbook == '0'?'checked':''?>>
                                                                            <span class="Polaris-RadioButton__Backdrop"></span>
                                                                            <span class="Polaris-RadioButton__Icon"></span>
                                                                        </span>
                                                                    </span>
                                                                    <span class="Polaris-Choice__Label"><span class="fa fa-facebook" aria-hidden="true"></span></span>
                                                                </label>
                                                            </li>
                                                            <li class="social-icons circle" style="padding-right: 15px;">
                                                                <label class="Polaris-Choice" for="facebook1">
                                                                    <span class="Polaris-Choice__Control">
                                                                        <span class="Polaris-RadioButton">
                                                                            <input id="facebook1" name="facebook" type="radio" class="Polaris-RadioButton__Input" value="1" <?php echo $facbook == '1'?'checked':''?>>
                                                                            <span class="Polaris-RadioButton__Backdrop"></span>
                                                                            <span class="Polaris-RadioButton__Icon"></span>
                                                                        </span>
                                                                    </span>
                                                                    <span class="Polaris-Choice__Label"><span class="fa fa-facebook" aria-hidden="true"></span></span>
                                                                </label>
                                                            </li>
                                                            <li class="social-icons" style="padding-right: 15px;">
                                                                <label class="Polaris-Choice" for="facebook2">
                                                                    <span class="Polaris-Choice__Control">
                                                                        <span class="Polaris-RadioButton">
                                                                            <input id="facebook2" name="facebook" type="radio" class="Polaris-RadioButton__Input" value="2" <?php echo $facbook == '2'?'checked':''?>>
                                                                            <span class="Polaris-RadioButton__Backdrop"></span>
                                                                            <span class="Polaris-RadioButton__Icon"></span>
                                                                        </span>
                                                                    </span>
                                                                    <span class="Polaris-Choice__Label"><span class="fa fa-facebook" aria-hidden="true"></span></span>
                                                                </label>
                                                            </li>
                                                        </ul>
                                                    </fieldset>
                                                </div>
                                                <div class="Polaris-FormLayout__Item">
                                                    <fieldset class="Polaris-ChoiceList" id="ChoiceList17" aria-invalid="false" aria-describedby="ChoiceList17Error">
                                                        <legend class="Polaris-ChoiceList__Title">Twitter</legend>
                                                        <ul class="Polaris-ChoiceList__Choices" style="display: flex;">
                                                            <li class="social-icons logo-only" style="padding-right: 15px;">
                                                                <label class="Polaris-Choice" for="twitter">
                                                                    <span class="Polaris-Choice__Control">
                                                                        <span class="Polaris-RadioButton">
                                                                            <input id="twitter" name="twitter" type="radio" class="Polaris-RadioButton__Input" value="0" <?php echo $twitter == '0'?'checked':''?>>
                                                                            <span class="Polaris-RadioButton__Backdrop"></span>
                                                                            <span class="Polaris-RadioButton__Icon"></span>
                                                                        </span>
                                                                    </span>
                                                                    <span class="Polaris-Choice__Label"><span class="fa fa-twitter" aria-hidden="true"></span></span>
                                                                </label>
                                                            </li>
                                                            <li class="social-icons circle" style="padding-right: 15px;">
                                                                <label class="Polaris-Choice" for="twitter1">
                                                                    <span class="Polaris-Choice__Control">
                                                                        <span class="Polaris-RadioButton">
                                                                            <input id="twitter1" name="twitter" type="radio" class="Polaris-RadioButton__Input" value="1" <?php echo $twitter == '1'?'checked':''?>>
                                                                            <span class="Polaris-RadioButton__Backdrop"></span>
                                                                            <span class="Polaris-RadioButton__Icon"></span>
                                                                        </span>
                                                                    </span>
                                                                    <span class="Polaris-Choice__Label"><span class="fa fa-twitter" aria-hidden="true"></span></span>
                                                                </label>
                                                            </li>
                                                            <li class="social-icons" style="padding-right: 15px;">
                                                                <label class="Polaris-Choice" for="twitter2">
                                                                    <span class="Polaris-Choice__Control">
                                                                        <span class="Polaris-RadioButton">
                                                                            <input id="twitter2" name="twitter" type="radio" class="Polaris-RadioButton__Input" value="2" <?php echo $twitter == '2'?'checked':''?>>
                                                                            <span class="Polaris-RadioButton__Backdrop"></span>
                                                                            <span class="Polaris-RadioButton__Icon"></span>
                                                                        </span>
                                                                    </span>
                                                                    <span class="Polaris-Choice__Label"><span class="fa fa-twitter" aria-hidden="true"></span></span>
                                                                </label>
                                                            </li>
                                                        </ul>
                                                    </fieldset>
                                                </div>
                                                <div class="Polaris-FormLayout__Item">
                                                    <fieldset class="Polaris-ChoiceList" id="ChoiceList17" aria-invalid="false" aria-describedby="ChoiceList17Error">
                                                        <legend class="Polaris-ChoiceList__Title">Google+</legend>
                                                        <ul class="Polaris-ChoiceList__Choices" style="display: flex;">
                                                            <li class="social-icons logo-only" style="padding-right: 15px;">
                                                                <label class="Polaris-Choice" for="google">
                                                                    <span class="Polaris-Choice__Control">
                                                                        <span class="Polaris-RadioButton">
                                                                            <input id="google" name="google" type="radio" class="Polaris-RadioButton__Input" value="0" <?php echo $google == '0'?'checked':''?>>
                                                                            <span class="Polaris-RadioButton__Backdrop"></span>
                                                                            <span class="Polaris-RadioButton__Icon"></span>
                                                                        </span>
                                                                    </span>
                                                                    <span class="Polaris-Choice__Label"><span class="fa fa-google-plus" aria-hidden="true"></span></span>
                                                                </label>
                                                            </li>
                                                            <li class="social-icons circle" style="padding-right: 15px;">
                                                                <label class="Polaris-Choice" for="google1">
                                                                    <span class="Polaris-Choice__Control">
                                                                        <span class="Polaris-RadioButton">
                                                                            <input id="google1" name="google" type="radio" class="Polaris-RadioButton__Input" value="1" <?php echo $google == '1'?'checked':''?>>
                                                                            <span class="Polaris-RadioButton__Backdrop"></span>
                                                                            <span class="Polaris-RadioButton__Icon"></span>
                                                                        </span>
                                                                    </span>
                                                                    <span class="Polaris-Choice__Label"><span class="fa fa-google-plus" aria-hidden="true"></span></span>
                                                                </label>
                                                            </li>
                                                            <li class="social-icons" style="padding-right: 15px;">
                                                                <label class="Polaris-Choice" for="google2">
                                                                    <span class="Polaris-Choice__Control">
                                                                        <span class="Polaris-RadioButton">
                                                                            <input id="google2" name="google" type="radio" class="Polaris-RadioButton__Input" value="2" <?php echo $google == '2'?'checked':''?>>
                                                                            <span class="Polaris-RadioButton__Backdrop"></span>
                                                                            <span class="Polaris-RadioButton__Icon"></span>
                                                                        </span>
                                                                    </span>
                                                                    <span class="Polaris-Choice__Label"><span class="fa fa-google-plus" aria-hidden="true"></span></span>
                                                                </label>
                                                            </li>
                                                        </ul>
                                                    </fieldset>
                                                </div>
                                                <div class="Polaris-FormLayout__Item">
                                                    <fieldset class="Polaris-ChoiceList" id="ChoiceList17" aria-invalid="false" aria-describedby="ChoiceList17Error">
                                                        <legend class="Polaris-ChoiceList__Title">Pinterest</legend>
                                                        <ul class="Polaris-ChoiceList__Choices" style="display: flex;">
                                                            <li class="social-icons logo-only" style="padding-right: 15px;">
                                                                <label class="Polaris-Choice" for="pinterest">
                                                                    <span class="Polaris-Choice__Control">
                                                                        <span class="Polaris-RadioButton">
                                                                            <input id="pinterest" name="pinterest" type="radio" class="Polaris-RadioButton__Input" value="0" <?php echo $pintrest == '0'?'checked':''?>>
                                                                            <span class="Polaris-RadioButton__Backdrop"></span>
                                                                            <span class="Polaris-RadioButton__Icon"></span>
                                                                        </span>
                                                                    </span>
                                                                    <span class="Polaris-Choice__Label"><span class="fa fa-pinterest" aria-hidden="true"></span></span>
                                                                </label>
                                                            </li>
                                                            <li class="social-icons circle" style="padding-right: 15px;">
                                                                <label class="Polaris-Choice" for="pinterest1">
                                                                    <span class="Polaris-Choice__Control">
                                                                        <span class="Polaris-RadioButton">
                                                                            <input id="pinterest1" name="pinterest" type="radio" class="Polaris-RadioButton__Input" value="1"<?php echo $pintrest == '1'?'checked':''?>>
                                                                            <span class="Polaris-RadioButton__Backdrop"></span>
                                                                            <span class="Polaris-RadioButton__Icon"></span>
                                                                        </span>
                                                                    </span>
                                                                    <span class="Polaris-Choice__Label"><span class="fa fa-pinterest" aria-hidden="true"></span></span>
                                                                </label>
                                                            </li>
                                                            <li class="social-icons" style="padding-right: 15px;">
                                                                <label class="Polaris-Choice" for="pinterest2">
                                                                    <span class="Polaris-Choice__Control">
                                                                        <span class="Polaris-RadioButton">
                                                                            <input id="pinterest2" name="pinterest" type="radio" class="Polaris-RadioButton__Input" value="2" <?php echo $pintrest == '2'?'checked':''?>>
                                                                            <span class="Polaris-RadioButton__Backdrop"></span>
                                                                            <span class="Polaris-RadioButton__Icon"></span>
                                                                        </span>
                                                                    </span>
                                                                    <span class="Polaris-Choice__Label"><span class="fa fa-pinterest" aria-hidden="true"></span></span>
                                                                </label>
                                                            </li>
                                                        </ul>
                                                    </fieldset>
                                                </div>
                                                <div class="Polaris-FormLayout__Item" style="display: none">
                                                    <fieldset class="Polaris-ChoiceList" id="ChoiceList17" aria-invalid="false" aria-describedby="ChoiceList17Error">
                                                        <legend class="Polaris-ChoiceList__Title">Xing</legend>
                                                        <ul class="Polaris-ChoiceList__Choices" style="display: flex;">
                                                            <li class="social-icons logo-only" style="padding-right: 15px;">
                                                                <label class="Polaris-Choice" for="RadioButton37">
                                                                    <span class="Polaris-Choice__Control">
                                                                        <span class="Polaris-RadioButton">
                                                                            <input id="RadioButton37" name="ChoiceList17" type="radio" class="Polaris-RadioButton__Input" value="hidden" checked="">
                                                                            <span class="Polaris-RadioButton__Backdrop"></span>
                                                                            <span class="Polaris-RadioButton__Icon"></span>
                                                                        </span>
                                                                    </span>
                                                                    <span class="Polaris-Choice__Label"><span class="fa fa-xing-square" aria-hidden="true"></span></span>
                                                                </label>
                                                            </li>
                                                            <li class="social-icons circle" style="padding-right: 15px;">
                                                                <label class="Polaris-Choice" for="RadioButton38">
                                                                    <span class="Polaris-Choice__Control">
                                                                        <span class="Polaris-RadioButton">
                                                                            <input id="RadioButton38" name="ChoiceList17" type="radio" class="Polaris-RadioButton__Input" value="optional">
                                                                            <span class="Polaris-RadioButton__Backdrop"></span>
                                                                            <span class="Polaris-RadioButton__Icon"></span>
                                                                        </span>
                                                                    </span>
                                                                    <span class="Polaris-Choice__Label"><span class="fa fa-xing-square" aria-hidden="true"></span></span>
                                                                </label>
                                                            </li>
                                                            <li class="social-icons" style="padding-right: 15px;">
                                                                <label class="Polaris-Choice" for="RadioButton39">
                                                                    <span class="Polaris-Choice__Control">
                                                                        <span class="Polaris-RadioButton">
                                                                            <input id="RadioButton39" name="ChoiceList17" type="radio" class="Polaris-RadioButton__Input" value="required">
                                                                            <span class="Polaris-RadioButton__Backdrop"></span>
                                                                            <span class="Polaris-RadioButton__Icon"></span>
                                                                        </span>
                                                                    </span>
                                                                    <span class="Polaris-Choice__Label"><span class="fa fa-xing-square" aria-hidden="true"></span></span>
                                                                </label>
                                                            </li>
                                                        </ul>
                                                    </fieldset>
                                                </div>
                                            </div>
                                            <div class="Polaris-PageActions" style="border-top: 0px">
                                                <div class="Polaris-Stack Polaris-Stack--spacingTight Polaris-Stack--distributionEqualSpacing">
                                                    <div class="Polaris-Stack__Item">
                                                        <button type="submit" id="settingFrmBtn" name="setting" class="Polaris-Button Polaris-Button--primary"><span class="Polaris-Button__Content"><span>Save</span></span></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- App general settings section end -->
                </div>
            </div>
            <?php 
            if($msg != ''){?>
                <script type="text/javascript">
                    ShopifyApp.flashNotice('<?php echo $msg;?>');
                </script>
            <?php }
            ?>
    </body>
</html>

  </Page>
);

export default Index;
