import { Box } from "../../../Shared/box";

export const data : Box [] = [
  {
    state: 0,
    href: '',
    text: [
      {
        header: 'FACULTY',
        body:
          `
          <div class="row" class="col-xs-12">
                   <div class = "table table-responsive table-bordered">
                    <table>
                            <tbody>
                           <!-- <tr class="filters">
                                <th>Name</th>
                                <th>Designation</th>
                                <th>Status</th>
                                <th>Tel(Direct)</th>
                                <th>Tel(FAx)</th>
                                <th>Ext.No.</th>
                                <th>Email ID</th>
                            </tr>-->

                            <tr>
                                <td colspan="7" style="background-color: #18214d; color: #fff;">CHAIRMAN SECRETARIAT</td>
                            </tr>
                            <tr>
                                <td>Prof. Anil D. Sahasrabudhe</td>
                                <td>Chairman</td>
                                <td>Tenure</td>
                                <td>011-26131498</td>
                                <td>-</td>
                                <td>1199</td>
                                <td><a href="mailto:chairman@aicte-india.org">chairman@aicte-india.org</a></td>
                            </tr>
                            <tr>
                                <td>Dr. M.P. Poonia  </td>
                                <td >Vice Chairman </td>
                                <td >Tenure </td>
                                <td >011-26131495</td>
                                <td >-</td>
                                <td >-</td>
                                <td ><a href="mailto:vcm@aicte-india.org">vcm@aicte-india.org</a> </td>
                            </tr>
                            <tr>
                                <td colspan="7" style="background-color: #18214d; color: #fff;"><strong>MS SECRETARIAT</strong></td>
                                <br>
                                <br>
                                
                            </tr>
                            <tr>
                                <td >Prof. A.P. Mittal</td>
                                <td >Member Secretary </td>
                                <td >Tenure</td>
                                <td >011-26131497</td>
                                <td >-</td>
                                <td >1399</td>
                                <td ><a href="mailto:vcm@aicte-india.org">ms@aicte-india.org</a></td>
                            </tr>
                            <tr>
                                <td colspan="6" style="background-color: #18214d; color: #fff;"><strong>APPROVAL BUREAU</strong></td>

                                <td style="background-color: #18214d; color: #fff;">
                                    <strong>
                                        <a href="mailto:helpdeskab@aicte-india.org" style="background-color: #18214d; color: #fff;">
                                            helpdeskab@aicte-india.org
                                        </a>
                                    </strong>
                                </td>

                            </tr>
                            <tr>
                                <td >Dr. Usha Natesan</td>
                                <td >Adviser-I</td>
                                <td >Deputation</td>
                                <td >011-26131569</td>
                                <td >-</td>
                                <td >1103</td>
                                <td ><a href="mailto:pbullagaddi@aicte-india.org">ushanatesan@aicte-india.org</a> </td>
                            </tr>
                            <tr>
                                <td >Dr.V.K. Soni</td>
                                <td >Director</td>
                                <td >Deputation</td>
                                <td >-</td>
                                <td >-</td>
                                <td >1106</td>
                                <td ><a href="mailto:vimleshsoni@aicte-india.org">vimleshsoni@aicte-india.org</a> </td>
                            </tr>
                            <tr>
                                <td >Shri M.Sundaresan</td>
                                <td >Assistant Director</td>
                                <td >Regular</td>
                                <td >-</td>
                                <td >-</td>
                                <td >1109</td>
                                <td >-</td>
                            </tr>


                            <tr>
                                <td >Sh. Shivanand Pujar</td>
                                <td >Asst. Director </td>
                                <td >Deputation</td>
                                <td >-</td>
                                <td >-</td>
                                <td >1105</td>
                                <td ><a href="mailto:adapproval@aicte-india.org">adapproval@aicte-india.org</a></td>
                            </tr>

                            <tr>
                                <td >Smt. Sangeeta Chainani</td>
                                <td >Computer System Assistant</td>
                                <td >Regular</td>
                                <td >-</td>
                                <td >-</td>
                                <td >1108</td>
                                <td ><a href="mailto:sangeetachainani@aicte-india.org">sangeetachainani@aicte-india.org</a> </td>
                            </tr>
                            <tr>
                                <td >Ms. Charanjeet Rakhra</td>
                                <td >DEO Gr. I</td>
                                <td >Regular</td>
                                <td >-</td>
                                <td >-</td>
                                <td >1102</td>
                                <td ><a href="mailto:chranjeetrakhra@aicte-india.org">chranjeetrakhra@aicte-india.org</a> </td>
                            </tr>
                            <tr>
                                <td >Sh. Shailender Satsangi</td>
                                <td >DEO Gr. I</td>
                                <td >Regular</td>
                                <td >-</td>
                                <td >-</td>
                                <td >1110</td>
                                <td ><a href="mailto:shailendersatsangi@aicte-india.org">shailendersatsangi@aicte-india.org</a> </td>
                            </tr>
                            <tr>
                                <td >Smt. Kanchan Dewan</td>
                                <td >DEO Gr. I</td>
                                <td >Regular</td>
                                <td >-</td>
                                <td >-</td>
                                <td >1110</td>
                                <td ><a href="mailto:dewankanchan@yahoo.in">dewankanchan@yahoo.in</a> </td>
                            </tr>
                            <tr>
                                <td >Sh. Sarju Mandal</td>
                                <td >Photo Copy Operator</td>
                                <td >Regular</td>
                                <td >-</td>
                                <td >-</td>
                                <td >1350</td>
                                <td ><a href="mailto:sarjumandal@aicte-india.org">sarjumandal@aicte-india.org</a> </td>
                            </tr>

                            <tr>
                                <td colspan="6" style="background-color: #18214d; color: #fff;"><strong>e-GOVERNANCE CELL</strong></td>
                                <td colspan="1" style="background-color: #18214d; color: #fff;">
                                    <strong>
                                        <a href="mailto:helpdesk-egovernance@aicte-india.org" style="background-color: #18214d; color: #fff;">
                                            helpdesk-egov@aicte-india.org
                                        </a>
                                    </strong>
                                </td>

                            </tr>

                            <tr>
                                <td >Dr. N.H. Siddalinga Swamy </td>
                                <td >Director </td>
                                <td >Deputation</td>
                                <td >011-26131574,011-26131575</td>
                                <td >-</td>
                                <td >1322</td>
                                <td ><a href="mailto:nhsswamy@aicte-india.org">nhsswamy@aicte-india.org</a> </td>
                            </tr>
                            <tr>
                                <td >Dr. Amit Dutta</td>
                                <td >Deputy Director </td>
                                <td >Deputation</td>
                                <td >-</td>
                                <td >-</td>
                                <td >1323</td>
                                <td >-</td>
                            </tr>
                            <tr style="background-color: #18214d; color: #fff;">
                                <td colspan="5" ><strong>CMAT and GPAT CELL</strong></td>
                                <td colspan="1">
                                    <strong>
                                        <a href="mailto:helpdesk-cmat@aicte-india.org" style="background-color: #18214d; color: #fff;">
                                            helpdesk-cmat@aicte-india.org
                                        </a>
                                    </strong>
                                </td>
                                <td colspan="1">
                                    <strong>
                                        <a href="mailto:helpdesk-gpat@aicte-india.org" style="background-color: #18214d; color: #fff;">
                                            helpdesk-gpat@aicte-india.org
                                        </a>
                                    </strong>
                                </td>
                            </tr>
                            <tr>
                                <td >Dr. N.H. Siddalinga Swamy </td>
                                <td >Director </td>
                                <td >Deputation</td>
                                <td >011-26131574,011-26131575</td>
                                <td >-</td>
                                <td >1322</td>
                                <td ><a href="mailto:nhsswamy@aicte-india.org">nhsswamy@aicte-india.org</a> </td>
                            </tr>

                            <tr>
                                <td >Smt. Anju  </td>
                                <td >DEO Gr. I</td>
                                <td >Regular</td>
                                <td >-</td>
                                <td >-</td>
                                <td >1323</td>
                                <td ><a href="mailto:anju@aicte-india.org">anju@aicte-india.org</a></td>
                            </tr>
                            <tr style="background-color: #18214d; color: #fff;">
                                <td colspan="5"><strong>ADMINISTRATION BUREAU</strong></td>
                                <td colspan="1">
                                    <strong>
                                        <a href="mailto:administration@aicte-india.org" style="background-color: #18214d; color: #fff;">
                                            administration@aicte-india.org
                                        </a>
                                    </strong>
                                </td>
                                <td colspan="1">
                                    <strong>
                                        <a href="mailto:helpdesk-admn@aicte-india.org" style="background-color: #18214d; color: #fff;">
                                            helpdesk-admn@aicte-india.org
                                        </a>
                                    </strong>
                                </td>
                            </tr>
                            <tr>
                                <td >Dr. Manpreet Singh Manna</td>
                                <td >Director </td>
                                <td >Deputation</td>
                                <td >011-26131566</td>
                                <td >-</td>
                                <td >1019</td>
                                <td ><a href="mailto:rsrathore@aicte-india.org">director.aicte@gmail.com</a> </td>
                            </tr>

                            <tr>
                                <td >Smt. Gujju Manusree</td>
                                <td >Deputy Director</td>
                                <td >Regular</td>
                                <td >-</td>
                                <td >-</td>
                                <td >1020</td>
                                <td ><a href="mailto:gujjumanusree@aicte-india.org">gujjumanusree@aicte-india.org</a> </td>
                            </tr>
                            <tr>
                                <td colspan="7" style="background-color: #18214d; color: #fff;">
                                    <strong>ADMINISTRATION BUREAU-I-PERSONAL SECTION</strong>
                                </td>

                            </tr>
                            <tr>
                                <td >Smt. Anju Kohli</td>
                                <td >Admin Officer </td>
                                <td >Regular</td>
                                <td >-</td>
                                <td >-</td>
                                <td >1029</td>
                                <td ><a href="mailto:anjukohli@aicte-india.org">anjukohli@aicte-india.org</a></td>
                            </tr>
                            <tr>
                                <td >Smt Simmi Mahajan</td>
                                <td >Deo Gr.I </td>
                                <td >Regular</td>
                                <td >-</td>
                                <td >-</td>
                                <td >1042</td>
                                <td ><a href="mailto:simmimahajan@aicte-india.org">simmimahajan@aicte-india.org</a></td>
                            </tr>
                            <tr>
                                <td >Mr .Pankaj </td>
                                <td >Upper division Clerk</td>
                                <td >Regular</td>
                                <td >-</td>
                                <td >-</td>
                                <td >1040</td>
                                <td >-</td>
                            </tr>


                            <tr>
                                <td >Sh. Budhan Mehto</td>
                                <td >LDC</td>
                                <td >Regular</td>
                                <td >-</td>
                                <td >-</td>
                                <td >1034</td>
                                <td ><a href="mailto:budhanmehto@aicte-india.org">budhanmehto@aicte-india.org</a> </td>
                            </tr>
                            <tr>
                                <td colspan="7" style="background-color: #18214d; color: #fff;"><p class="style1"><strong>ADMINISTRATION BUREAU-II-ESTABLISHMENT SECTION	</strong></td>

                            </tr>
                            <tr>
                                <td >Sh. R.P. Singh</td>
                                <td >Sr.Administrative Officer </td>
                                <td >Regular</td>
                                <td >-</td>
                                <td >-</td>
                                <td >1022</td>
                                <td >-</td>
                            </tr>
                            <tr>
                                <td >Smt. Sangeetha Gera</td>
                                <td >Assistant </td>
                                <td >Deputation</td>
                                <td >-</td>
                                <td >-</td>
                                <td >1039</td>
                                <td >-</td>
                            </tr>
                            <tr>
                                <td >Sh.R.P.Diwakar</td>
                                <td >UDC </td>
                                <td >Regular</td>
                                <td >-</td>
                                <td width="83" valign="top">-</td>
                                <td >1038</td>
                                <td >-</td>
                            </tr>
                            <tr>
                                <td >Sh.Nalin Prasad Kulsari</td>
                                <td >DEO-III</td>
                                <td >Regular</td>
                                <td >-</td>
                                <td width="83" valign="top">-</td>
                                <td >1039</td>
                                <td >-</td>
                            </tr>

                            <tr>
                                <td colspan="7" style="background-color: #18214d; color: #fff;"><p class="style1"><strong>ADMINISTRATION BUREAU-III-GENERAL ADMN</strong></td>

                            </tr>
                            <tr>
                                <td >Sh. Dal Chand</td>
                                <td >Admn. Officer</td>
                                <td >Regular</td>
                                <td >-</td>
                                <td >-</td>
                                <td >1028</td>
                                <td ><a href="mailto:dalchand@aicte-india.org">dalchand@aicte-india.org</a> </td>
                            </tr>
                            <tr>
                                <td >Sh. Harinder Singh</td>
                                <td >DEO Gr. I</td>
                                <td >Regular</td>
                                <td >-</td>
                                <td >-</td>
                                <td >1026</td>
                                <td ><a href="mailto:harindersingh@aicte-india.org">harindersingh@aicte-india.org</a> </td>
                            </tr>
                            <tr>
                                <td >Sh. Karambir Singh</td>
                                <td >LDC</td>
                                <td >Regular</td>
                                <td >-</td>
                                <td >-</td>
                                <td >1035</td>
                                <td >-</td>
                            </tr>
                            <tr>
                                <td >Sh. Gopal</td>
                                <td >LDC(Store)</td>
                                <td >Regular</td>
                                <td >-</td>
                                <td >-</td>
                                <td >1025</td>
                                <td ><a href="mailto:gopal@aicte-india.org">gopal@aicte-india.org</a> </td>
                            </tr>
                            <tr>
                                <td >Sh. Dalbir </td>
                                <td >Peon/Multi Task Staff</td>
                                <td >Regular</td>
                                <td >-</td>
                                <td >-</td>
                                <td >1006</td>
                                <td >-</td>
                            </tr>

                            <tr>
                                <td colspan="6" style="background-color: #18214d; color: #fff;">
                                    <p class="style1"><strong>ADMINISTRATION BUREAU-IV-HINDI CELL &amp; LIBRARY  </strong></td>

                                <td style="background-color: #18214d; color: #fff;"><p class="style1"><strong><a href="mailto:hindi@aicte-india.org" style="color:#FFFFFF">hindi@aicte-india.org</a></strong></td>
                            </tr>
                            <tr>
                                <td >Smt. Reena Sharma</td>
                                <td >Hindi Officer<br>Hindi Lib(Addl.charge)+<br> Member (AICTE Newsletter)</td>
                                <td >Regular</td>
                                <td >-</td>
                                <td >-</td>
                                <td >1027</td>
                                <td ><a href="mailto:reenasharma@aicte-india.org">reenasharma@aicte-india.org</a> </td>
                            </tr>
                            <tr>
                                <td >Smt. Jagrithi Prakash </td>
                                <td >DEO, Gr-II</td>
                                <td >Regular</td>
                                <td >-</td>
                                <td >-</td>
                                <td >1034</td>
                                <td >-</td>
                            </tr>
                            <tr>
                                <td colspan="7" style="background-color: #18214d; color: #fff;"><p class="style1"><strong> Officer on Special Duty (MHRD)</strong></td>

                            </tr>
                            <tr>
                                <td >Dr.Dinesh Narain Vyas  </td>
                                <td >Officer on Special Duty</td>
                                <td >Deputation</td>
                                <td >-</td>
                                <td >-</td>
                                <td >-</td>
                                <td >-</td>
                            </tr>

                            <tr>
                                <td colspan="6" style="background-color: #18214d; color: #fff;"><p class="style1"><strong> PARLIAMENT CELL</strong></td>
                                <td style="background-color: #18214d; color: #fff;"><p class="style1"><strong><a href="mailto:helpdesk-parliament@aicte-india.org" style="color:#FFFFFF">helpdesk-parliament@aicte-india.org</a></strong></td>

                            </tr>
                            <tr>
                                <td >Dr.S.K. Goel  </td>
                                <td >Director</td>
                                <td >Regular</td>
                                <td >011-26131499</td>
                                <td >-</td>
                                <td >1217</td>
                                <td >-</td>
                            </tr>
                            <tr>
                                <td >Dr. N.H. Siddhalinga Swamy  </td>
                                <td >Director</td>
                                <td >Deputation</td>
                                <td >011-26131574,011-26131575</td>
                                <td >-</td>
                                <td >1322</td>
                                <td ><a href="mailto:nhsswamy@aicte-india.org">nhsswamy@aicte-india.org</a> </td>
                            </tr>
                            <tr>
                                <td colspan="6" style="background-color: #18214d; color: #fff;"><p class="style1"><strong>FINANCE BUREAU</strong></td>

                                <td style="background-color: #18214d; color: #fff;"><p class="style1"><strong><a href="mailto:finance@aicte-india.org" style="color:#FFFFFF">finance@aicte-india.org</a></strong>
                                    <p class="style1"><strong><a href="mailto:helpdesk-finance@aicte-india.org" style="color:#FFFFFF">helpdesk-finance@aicte-india.org</a></strong></td>
                            </tr>
                            <tr>
                                <td >Smt. Vinita Arya </td>
                                <td >Director </td>
                                <td >Deputation</td>
                                <td >011-26131572</td>
                                <td >-</td>
                                <td >1124</td>
                                <td ><a href="mailto:vinitaarya@aicte-India.org">vinitaarya@aicte-India.org</a> </td>
                            </tr>
                            <tr>
                                <td >Sh. G. Anand </td>
                                <td >Senior Accounts Officer </td>
                                <td >Deputation</td>
                                <td >-</td>
                                <td >-</td>
                                <td >1127</td>
                                <td ><a href="mailto:nikon_6908@yahoo.co.in">nikon_6908@yahoo.co.in</a> </td>
                            </tr>
                            <tr>
                                <td >Sh. Girish Kumar Bhasin</td>
                                <td >Accounts Officer </td>
                                <td >Regular</td>
                                <td >-</td>
                                <td >-</td>
                                <td >1128</td>
                                <td ><a href="mailto:gsb3@rediffmail.com">gsb3@rediffmail.com</a> </td>
                            </tr>
                            <tr>
                                <td >Sh. K.S. Rao</td>
                                <td >Accounts Officer </td>
                                <td >Regular</td>
                                <td >-</td>
                                <td >-</td>
                                <td >1139</td>
                                <td >-</td>
                            </tr>


                            <tr>
                                <td >Sh. Yogesh Wadhawan</td>
                                <td >Accounts Officer </td>
                                <td >Regular</td>
                                <td >-</td>
                                <td >-</td>
                                <td >1129</td>
                                <td ><a href="mailto:yogeshwadhawan@aicte-india.org">yogeshwadhawan@aicte-india.org</a> </td>
                            </tr>
                            <tr>
                                <td >Sh. A.K. Singh </td>
                                <td >OSA (Accountant)</td>
                                <td >Regular</td>
                                <td >-</td>
                                <td >-</td>
                                <td >1136</td>
                                <td ><a href="mailto:osafin@aicte-india.org">osafin@aicte-india.org</a> </td>
                            </tr>
                            <tr>
                                <td >Sh. Sanjay Sharma </td>
                                <td >DEO Gr. I</td>
                                <td >Regular</td>
                                <td >-</td>
                                <td >-</td>
                                <td >1134</td>
                                <td >-</td>
                            </tr>
                            <tr>
                                <td >Smt.Mary Kutty </td>
                                <td >UDC</td>
                                <td >Regular</td>
                                <td >-</td>
                                <td >-</td>
                                <td >1140</td>
                                <td >-</td>
                            </tr>
                            <tr>
                                <td >Smt. Sushila Meena</td>
                                <td >LDC</td>
                                <td >Regular</td>
                                <td >-</td>
                                <td >-</td>
                                <td >1140</td>
                                <td >-</td>
                            </tr>
                            <tr>
                                <td colspan="6" style="background-color: #18214d; color: #fff;"><p class="style1"><strong>INTERNAL AUDIT CELL</strong></td>
                                <td style="background-color: #18214d; color: #fff;"><p class="style1"><strong><a href="mailto:helpdesk-internalaudit@aicte-india.org" style="color:#FFFFFF">helpdesk-internalaudit@aicte-india.org</a></strong></td>

                            </tr>
                            <tr>
                                <td >Dr.S.K. Goel  </td>
                                <td >Director</td>
                                <td >Regular</td>
                                <td >011-26131499</td>
                                <td >-</td>
                                <td >1217</td>
                                <td >-</td>
                            </tr>
                            <tr>
                                <td colspan="6" style="background-color: #18214d; color: #fff;"><p class="style1"><strong>GRIEVANCES REDRESSAL CELL</strong></td>

                                <td style="background-color: #18214d; color: #fff;"><p class="style1"><strong><a href="mailto:pubgrv@aicte-india.org" style="color:#FFFFFF">pubgrv@aicte-india.org
                                </a></strong><p class="style1"><strong><a href="mailto:antiraging@aicte-india.org" style="color:#FFFFFF">antiraging@aicte-india.org</a></strong>
                                    <p class="style1"><strong><a href="mailto:helpdesk-grievance@aicte-india.org" style="color:#FFFFFF">helpdesk-grievance@aicte-india.org

                                    </a></strong></td>
                            </tr>
                            <tr>
                                <td >Prof. Rajive Kumar </td>
                                <td >Advisor-I</td>
                                <td >Deputation</td>
                                <td >011-26131491</td>
                                <td >-</td>
                                <td >1221</td>
                                <td ><a href="mailto:advvig@aicte-india.org">advvig@aicte-india.org</a></td>
                            </tr>
                            <tr>
                                <td >Sh. Narender Singh </td>
                                <td >Deputy Director</td>
                                <td >Regular</td>
                                <td >-</td>
                                <td >-</td>
                                <td >1225</td>
                                <td ><a href="mailto:narendersingh@aicte-india.org">narendersingh@aicte-india.org</a></td>
                            </tr>
                            <tr>
                                <td colspan="6" style="background-color: #18214d; color: #fff;"><p class="style1"><strong>VIGILANCE CELL</strong></td>

                                <td style="background-color: #18214d; color: #fff;"><p class="style1"><strong><a href="mailto:vigilance@aicte-india.org" style="color:#FFFFFF">vigilance@aicte-india.org</a></strong>
                                    <p class="style1"><strong><a href="mailto:helpdesk-vigilance@aicte-india.org" style="color:#FFFFFF">helpdesk-vigilance@aicte-india.org</a></strong></td>
                            </tr>
                            <tr>
                                <td >Prof. Rajive Kumar </td>
                                <td >Advisor-I</td>
                                <td >Deputation</td>
                                <td >011-26131491</td>
                                <td >-</td>
                                <td >1221</td>
                                <td ><a href="mailto:advvig@aicte-india.org">advvig@aicte-india.org</a></td>
                            </tr>
                            <tr>
                                <td >Smt. Nandita Bakshi</td>
                                <td >DEO Gr. I</td>
                                <td >Regular</td>
                                <td >-</td>
                                <td >-</td>
                                <td >1230</td>
                                <td ><a href="mailto:nanditabakshi@aicte-india.org">nanditabakshi@aicte-india.org</a> </td>
                            </tr>
                            <tr>
                                <td colspan="6" style="background-color: #18214d; color: #fff;"><p class="style1"><strong>LEGAL CELL</strong></td>

                                <td style="background-color: #18214d; color: #fff;"><p class="style1"><strong><a href="mailto:legal@aicte-india.org" style="color:#FFFFFF">legal@aicte-india.org</a></strong>
                                    <p class="style1"><strong><a href="mailto:helpdesk-legal@aicte-india.org" style="color:#FFFFFF">helpdesk-legal@aicte-india.org</a></strong></td>
                            </tr>
                            <tr>
                                <td >Dr.S.K. Goel  </td>
                                <td >Director</td>
                                <td >Regular</td>
                                <td >011-26131499</td>
                                <td >-</td>
                                <td >1217</td>
                                <td >-</td>
                            </tr>
                            <tr>
                                <td >Dr.Mohd.Asif  </td>
                                <td >Assistant Director</td>
                                <td >Deputation</td>
                                <td >-</td>
                                <td >-</td>
                                <td >1205</td>
                                <td >-</td>
                            </tr>
                            <tr>
                                <td >Sh.Bharat Ram  </td>
                                <td >Chief Admin. Officer</td>
                                <td >Regular</td>
                                <td >-</td>
                                <td >-</td>
                                <td >-</td>
                                <td >-</td>
                            </tr>

                            <tr>
                                <td >Sh. K.C. Roy </td>
                                <td >DEO Gr. I</td>
                                <td >Regular</td>
                                <td >-</td>
                                <td >-</td>
                                <td >1233</td>
                                <td ><a href="mailto:kcroy@aicte-india.org">kcroy@aicte-india.org</a> </td>
                            </tr>
                            <tr>
                                <td  colspan="6" style="background-color: #18214d; color: #fff;"><p class="style1"><strong>Skill Development Cell(SDC)</strong></td>
                                <td style="background-color: #18214d; color: #fff;"><p class="style1"><strong><a href="mailto:helpdesk-sdc@aicte-india.org" style="color:#FFFFFF">helpdesk-sdc@aicte-india.org</a></strong></td>

                            </tr>
                            <tr>
                                <td >Dr. R.S. Rathore</td>
                                <td >Director</td>
                                <td >Deputation</td>
                                <td >011-26131566</td>
                                <td >-</td>
                                <td >1016</td>
                                <td ><a href="mailto:rsrathore@aicte-india.org">rsrathore@aicte-india.org</a> </td>
                            </tr>
                            <tr>
                                <td >Smt Ruchika Kem</td>
                                <td >Assistant Director</td>
                                <td >Deputation</td>
                                <td >-</td>
                                <td >-</td>
                                <td >1011</td>
                                <td >-</td>
                            </tr>

                            <tr>
                                <td  colspan="6" style="background-color: #18214d; color: #fff;"><p class="style1"><strong>SWAYAM Cell</strong></td>
                                <td style="background-color: #18214d; color: #fff;"><p class="style1"><strong><a href="mailto:helpdesk-swayam@aicte-india.org" style="color:#FFFFFF">helpdesk-swayam@aicte-india.org</a></strong></td>

                            </tr>
                            <tr>
                                <td >Dr. Manpreet Singh Manna</td>
                                <td >Director(Officer Incharge)</td>
                                <td >Deputation</td>
                                <td >011-26131573</td>
                                <td >-</td>
                                <td >1332</td>
                                <td ><a href="mailto:manpreetsinghmanna@aicte-india.org">manpreetsinghmanna@aicte-india.org</a><br><a href="mailto:director.aicte@gmail.com">director.aicte@gmail.com</a> </td>
                            </tr>
                            <tr>
                                <td >Dr. N.H. Siddalinga Swamy </td>
                                <td >Director </td>
                                <td >Deputation</td>
                                <td >011-26131574,011-26131575</td>
                                <td >-</td>
                                <td >1322</td>
                                <td ><a href="mailto:nhsswamy@aicte-india.org">nhsswamy@aicte-india.org</a> </td>
                            </tr>
                            <tr>
                                <td >Sh Vinay Kumar</td>
                                <td >DEO Gr. I</td>
                                <td >Regular</td>
                                <td >-</td>
                                <td >-</td>
                                <td >1316</td>
                                <td ><a href="mailto:vinaykumar@aicte-india.org">vinaykumar@aicte-india.org</a> </td>
                            </tr>
                            <tr>
                                <td  colspan="6" style="background-color: #18214d; color: #fff;"><p class="style1"><strong>RESEARCH INSTITUTION &amp; FACULTY DEVELOPMENT(RIFD)BUREAU</strong></td>
                                <td style="background-color: #18214d; color: #fff;"><p class="style1"><strong><a href="mailto:helpdesk-rifd@aicte-india.org" style="color:#FFFFFF">helpdesk-rifd@aicte-india.org</a></strong></td>

                            </tr>
                            <tr>
                                <td >Prof. Dileep N. Malkhede</td>
                                <td >Adviser-I</td>
                                <td >Deputation</td>
                                <td >011-26131492</td>
                                <td >-</td>
                                <td >1307</td>
                                <td ><a href="mailto:advrifd@aicte-india.org">advrifd@aicte-india.org</a> </td>
                            </tr>
                            <tr>
                                <td >Sh. Anand Kumar</td>
                                <td >Deputy Director </td>
                                <td >Deputation</td>
                                <td >-</td>
                                <td >-</td>
                                <td >1014</td>
                                <td ><a href="mailto:anandkumar@aicte-india.org">anandkumar@aicte-india.org</a> </td>
                            </tr>

                            <tr>
                                <td >Dr.Neetu Bhagat</td>
                                <td >Deputy Director</td>
                                <td >Deputation</td>
                                <td >-</td>
                                <td >-</td>
                                <td >1310</td>
                                <td ><a href="mailto:ddrifd@aicte-India.org">ddrifd@aicte-India.org</a> </td>
                            </tr>
                            <tr>
                                <td >Sh. Rakesh Kumar Ganju</td>
                                <td >Assistant Director</td>
                                <td >Regular</td>
                                <td >-</td>
                                <td >-</td>
                                <td >1010</td>
                                <td >-</td>
                            </tr>

                            <tr>
                                <td >Dr. Amit Vishwasrao Salunkhe</td>
                                <td >Assistant Director</td>
                                <td >Deputation</td>
                                <td >-</td>
                                <td >-</td>
                                <td >1314</td>
                                <td ><a href="mailto:adrifd@aicte-India.org">adrifd@aicte-India.org</a></td>
                            </tr>
                            <tr>
                                <td >Sh. Ajit Singh</td>
                                <td >LDC </td>
                                <td >Regular</td>
                                <td >-</td>
                                <td >-</td>
                                <td >1134</td>
                                <td ><a href="mailto:ajitsingh@aicte-india.org">ajitsingh@aicte-india.org</a> </td>
                            </tr>

                            <tr>
                                <td colspan="6" style="background-color: #18214d; color: #fff;">

                                    <strong>DIRECT BENEFIT TRANSFER (DBT) CELL
                                    </strong>
                                </td>


                                <td style="background-color: #18214d; color: #fff;" ><p class="style1"><strong><a href="mailto: dbtcell@aicte-india.org" style="color:#FFFFFF"> dbtcell@aicte-india.org</a></strong></td>
                            </tr>
                            <tr>
                                <td >Prof. Dileep N. Malkhede</td>
                                <td >Advisor</td>
                                <td >Deputation</td>
                                <td >011-26131492</td>
                                <td >-</td>
                                <td >1307</td>
                                <td ><a href="mailto:advrifd@aicte-india.org">advdbt@aicte-india.org</a> </td>
                            </tr>
                            <tr>
                                <td >Dr. N.H. Siddalinga Swamy </td>
                                <td >Director </td>
                                <td >Deputation</td>
                                <td >011-26131574,011-26131575</td>
                                <td >-</td>
                                <td >1322</td>
                                <td ><a href="mailto:nhsswamy@aicte-india.org">nhsswamy@aicte-india.org</a> </td>
                            </tr>
                            <tr>
                                <td >Smt. Vinita Arya</td>
                                <td >Director</td>
                                <td >Deputation</td>
                                <td >011-26131572</td>
                                <td >-</td>
                                <td >-</td>
                                <td ><a href="mailto:vinitaarya@aicte-India.org">vinitaarya@aicte-India.org</a> </td>
                            </tr>
                            <tr>
                                <td >Dr.Neetu Bhagat</td>
                                <td >Deputy Director</td>
                                <td >Deputation</td>
                                <td >-</td>
                                <td >-</td>
                                <td >1310</td>
                                <td ><a href="mailto:ddrifd@aicte-India.org">ddrifd@aicte-India.org</a> </td>
                            </tr>
                            <tr>
                                <td >Sh. Anand Kumar</td>
                                <td >Deputy Director </td>
                                <td >Deputation</td>
                                <td >-</td>
                                <td >-</td>
                                <td >1014</td>
                                <td ><a href="mailto:anandkumar@aicte-india.org">anandkumar@aicte-india.org</a> </td>
                            </tr>
                            <tr>
                                <td >Dr. Amit Vishwasrao Salunkhe</td>
                                <td >Assistant Director</td>
                                <td >Deputation</td>
                                <td >-</td>
                                <td >-</td>
                                <td >1314</td>
                                <td ><a href="mailto:adrifd@aicte-India.org">adrifd@aicte-India.org</a></td>
                            </tr>

                            <tr>
                                <td colspan="6" style="background-color: #18214d; color: #fff;"><p class="style1"><strong>POLICY AND ACADEMIC PLANNING BUREAU</strong></td>
                                <td style="background-color: #18214d; color: #fff;"><p class="style1"><strong><a href="mailto:helpdesk-pap@aicte-india.org" style="color:#FFFFFF">helpdesk-pap@aicte-india.org

                                </a></strong>

                                    <p class="style1"><strong><a href="mailto: plancord@aicte-india.org" style="color:#FFFFFF"> plancord@aicte-india.org</a></strong></td>
                            </tr>
                            <tr>
                                <td >Prof. Rajive Kumar </td>
                                <td >Advisor-I</td>
                                <td >Deputation</td>
                                <td >011-26131491</td>
                                <td >-</td>
                                <td >1215</td>
                                <td ><a href="mailto:advpc@aicte-india.org">advpc@aicte-india.org</a></td>
                            </tr>
                            <tr>
                                <td >Dr. B.L. Rama</td>
                                <td >Director</td>
                                <td >Regular</td>
                                <td >-</td>
                                <td >-</td>
                                <td >1212</td>
                                <td ><a href="mailto:blrama@aicte-india.org">blrama@aicte-india.org</a> </td>
                            </tr>

                            <tr>
                                <td >Shri Piyush Shukla</td>
                                <td >Assistant Director </td>
                                <td >Regular</td>
                                <td >-</td>
                                <td >-</td>
                                <td >1208</td>
                                <td >-</td>
                            </tr>
                            <tr>
                                <td >Shri Nawal Kishore Arora</td>
                                <td >Assistant Director </td>
                                <td >Deputation</td>
                                <td >-</td>
                                <td >-</td>
                                <td >-</td>
                                <td >-</td>
                            </tr>
                            <tr>
                                <td >Dr.Mohd.Asif</td>
                                <td >Assistant Director </td>
                                <td >Deputation</td>
                                <td >-</td>
                                <td >-</td>
                                <td >1205</td>
                                <td >-</td>
                            </tr>
                            <tr>
                                <td colspan="6" style="background-color: #18214d; color: #fff;"><p class="style1"><strong>ESTATE MANAGEMENT CELL</strong></td>
                                <td style="background-color: #18214d; color: #fff;"><p class="style1"><strong><a href="mailto:estate@aicte-india.org" style="color:#FFFFFF">estate@aicte-india.org</a></strong></td>
                            </tr>
                            <tr>
                                <td >Dr. R.S.Rathore</td>
                                <td >Director </td>
                                <td >Deputation</td>
                                <td >011-26131566</td>
                                <td >-</td>
                                <td >1016</td>
                                <td ><a href="mailto:rsrathore@aicte-india.org">rsrathore@aicte-india.org</a> </td>
                            </tr>



                            <tr>
                                <td >Sh. Shivanand Pujar</td>
                                <td >Asst. Director </td>
                                <td >Deputation</td>
                                <td >-</td>
                                <td >-</td>
                                <td >1105</td>
                                <td ><a href="mailto:assistantdirectorab@aicte-india.org">assistantdirectoremc@aicte-india.org</a></td>
                            </tr>
                            <tr>
                                <td >Sh. Satish Kumar</td>
                                <td >Council Engineer</td>
                                <td >Regular</td>
                                <td >-</td>
                                <td >-</td>
                                <td >1005</td>
                                <td ><a href="mailto:satishkumar@aicte-india.org">satishkumar@aicte-india.org</a> </td>
                            </tr>

                            <tr>
                                <td >Sh. Harish Chander </td>
                                <td >DEO, Gr-I</td>
                                <td >Regular</td>
                                <td >-</td>
                                <td >-</td>
                                <td >1002</td>
                                <td >-</td>
                            </tr>

                            <tr>
                                <td colspan="6" style="background-color: #18214d; color: #fff;"><p class="style1"><strong>RTI CELL</strong></td>
                                <td style="background-color: #18214d; color: #fff;"><p class="style1"><strong><a href="mailto:rti@aicte-india.org" style="color:#FFFFFF">rti@aicte-india.org</a></strong>
                                    <p class="style1"><strong><a href="mailto:helpdesk-rti@aicte-india.org" style="color:#FFFFFF">helpdesk-rti@aicte-india.org</a></strong></td>
                            </tr>
                            <tr>
                                <td >Smt. Ruchika Bhagat</td>
                                <td >Assistant Director &amp; CPIO</td>
                                <td >Deputation</td>
                                <td >-</td>
                                <td >-</td>
                                <td >1011</td>
                                <td ><a href="mailto:ruchika.kem@gmail.com">ruchika.kem@gmail.com</a> </td>
                            </tr>

                            <tr>
                                <td colspan="6" style="background-color: #18214d; color: #fff;"><p class="style1"><strong>Newsletter</strong></td>
                                <td style="background-color: #18214d; color: #fff;"><p class="style1"><strong><a href="mailto:rti@aicte-india.org" style="color:#FFFFFF">rti@aicte-india.org</a></strong></td>
                            </tr>
                            <tr>
                                <td >Dr. Manpreet Singh Manna</td>
                                <td >Director</td>
                                <td >Deputation</td>
                                <td >-</td>
                                <td >-</td>
                                <td >1019</td>
                                <td ><a href="mailto:director.aicte@gmail.com">director.aicte@gmail.com</a> </td>
                            </tr>
                            <tr>
                                <td >Smt. Reena Sharma</td>
                                <td >Junior Hindi Translator</td>
                                <td >Regular</td>
                                <td >-</td>
                                <td >-</td>
                                <td >1027</td>
                                <td ><a href="mailto:reenasharma@aicte-india.org">reenasharma@aicte-india.org</a> </td>
                            </tr>
                            <tr>
                            </tr><tr>
                                <td  colspan="7" style="background-color: #18214d; color: #fff;" ><strong>STAFF CAR DRIVER</strong></td>

                            </tr>
                            <tr>
                                <td >Sh. Mani Ram</td>
                                <td >Staff Car Driver</td>
                                <td >Regular</td>
                                <td >-</td>
                                <td >-</td>
                                <td >-</td>
                                <td >-</td>
                            </tr>
                            <tr>
                                <td >Sh. Naresh Kumar</td>
                                <td >Staff Car Driver</td>
                                <td >Regular</td>
                                <td >-</td>
                                <td >-</td>
                                <td >-</td>
                                <td >-</td>
                            </tr>
                            <tr>
                                <td >Sh. Satyavan Singh</td>
                                <td >Staff Car Driver</td>
                                <td >Regular</td>
                                <td >-</td>
                                <td >-</td>
                                <td >-</td>
                                <td >-</td>
                            </tr>
                            <tr>
                                <td >Sh.Anandbir</td>
                                <td >Staff Car Driver</td>
                                <td >Regular</td>
                                <td >-</td>
                                <td >-</td>
                                <td >-</td>
                                <td >-</td>
                            </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
          `
      },
    ],
    link: [],
    pdf: []
  }
];
