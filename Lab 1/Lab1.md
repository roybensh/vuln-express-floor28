**Lab 1 (15 min)**

In this lab you will set up and configure your personal JFrog Platform
environment.

Your personal Environment will be used for the other labs in the
workshop.

*Your environment will be available for 2 weeks!*

Upon successful completion of this lab you will be able to login to your
personal environment with your personal credentials and observe two
docker repositories configured for you. You will also be able to browse
demo data and findings in the platform

**Step by step instructions**

1.  Open your terminal & download the zip file

> curl -sLO
> [https://releases.jfrog.io/artifactory/website/security/guided-trial.zip]

2.  Unzip it to your selected working folder

3.  Browse to
    > [jfrog.com/start-free/security]

4.  Complete the registration process
    > \
    > *[Phase #1:]*\
    > ![](./media/image6.png){width="6.5in"
    > height="5.055555555555555in"}

> *Phase #2*

-   Populate hostname which you should use later on. Best practice is
    > "firstname-lastname" i.e. "david-cohen"

-   Your company name

-   Select AWS & "EU West" region (Ireland)

> ![](./media/image7.png){width="6.5in" height="3.25in"}\
> \
> *Phase #3:*
>
> Your environment is being prepared.
>
> In the next screen, please select the password to be used (or API
> token in case of SSO)

5.  Return to your terminal and run
    > bash guided-trial/linux_guided_trial.sh\
    > *There is also a windows version in the folder if needed.*

6.  From the menu, select option #1:
    > Configure the instance new or existing\
    > ![](./media/image5.png){width="6.5in"
    > height="1.9166666666666667in"}\
    > \
    > And then option #2\
    > I already have an instance\
    > ![](./media/image11.png){width="6.5in"
    > height="1.7777777777777777in"}\
    > \
    > Now, enter your instance name, email address used & password or
    > token as needed\
    > ![](./media/image4.png){width="6.5in"
    > height="2.1666666666666665in"}\
    > Note the script's outputs as it configures your environment
    > ![](./media/image8.png){width="6.5in"
    > height="1.9583333333333333in"}

7.  Return to your browser and open your server at https://\<your
    > instance name\>.jfrog.io/ui/admin/repositories/remote and see
    > there is a "docker-hub-remote-repo" remote repository created
    > ![](./media/image10.png){width="6.5in"
    > height="2.986111111111111in"}\
    > Your remote repository will be used in the next lab to pull a
    > docker image from Docker-Hub.

8.  Now, switch to the 'local' tab using the UI or https://\<your
    > instance name\>.jfrog.io/ui/admin/repositories/local to see the
    > "local-docker-repo" local repository created
    > ![](./media/image9.png){width="6.5in"
    > height="2.986111111111111in"}\
    > Your local repository will be used in the next lab to push a
    > docker image to the JFrog Platform.\
    > \
    > Note the other two local repositories: docker-trial and tf-trial.
    > Those are already pre-populated with Docker and Terraform data &
    > can be browsed during or after the workshop.

> **Congratulations! You have completed Lab 1**

**Lab 2 (30 min)**![horizontal line](./media/image13.png){width="6.5in"
height="6.944444444444445e-2in"}

In this lab you will experience JFrog Advanced Security value with
actual docker images scanning.

Upon successful completion of this lab you will gain knowledge of how to
use the Security issues page and extract relevant value from it

[**Step by step instructions\
\
***Phase #1 - Pulling a docker image:*]

1.  Open the terminal used in Lab 1, or, in case you've closed it, open
    > a new one and run
    > bash guided-trial/linux_guided_trial.sh

2.  From the menu, select option #3:

> Pull Docker image or select sample docker image\
> ![](./media/image3.png){width="6.5in" height="2.3472222222222223in"}

3.  Now select 'WebGoat', option #1:

> Pull OWASP WebGoat - Good example of Contextual Analysis value\
> ![](./media/image1.png){width="6.5in" height="2.8472222222222223in"}\
> Note how the docker image is being pulled from Docker Hub, through
> Artifactory to your personal laptop.
>
> Your browser will be opened to your server's scan results page
> (results may take up to 5 min to complete).

4.  Look at "CVE-2022-22965"

    a.  Is it applicable to this docker image?

    b.  What is the risk?

    c.  What is the remediation process?

5.  Now look at "CVE-2023-20873"

    a.  Note the CVSS score of 9.8!

    b.  Why is it not applicable to this docker image?

*[Phase #2 - Pushing a docker image:]*

6.  Go back to your terminal & select option #4 from the menu:

> Push Docker image from local machine to scan with JAS\
> ![](./media/image2.png){width="6.5in" height="3.6666666666666665in"}
>
> Select a docker image from the list of available images on your laptop
> and push it.
>
> See how the image is uploaded to Artifactory.\
> \
> *[Note]: If you do not have one in your workstation, run
> in your terminal: "* docker pull netdata/netdata:v1.13.0*"\
> *The examples below are using the public netdata image.*\
> *\
> Your browser will be opened to your server's scan results page
> (results may take up to 5 min to complete).
>
> ![](./media/image14.png){width="6.5in" height="2.9583333333333335in"}

7.  How many CVEs can be found in your selected docker images?

8.  Do you see any High/Critical CVEs that are not applicable? Why?

9.  Does your selected image have any Policy violations?\
    > ![](./media/image15.png){width="6.5in" height="2.625in"}

10. Does your selected image have any application exposures?\
    > ![](./media/image16.png){width="6.5in" height="2.625in"}

11. Does your selected image have any secrets detected?\
    > ![](./media/image17.png){width="6.5in" height="2.625in"}

**[\
Congratulations! You have completed Lab 2]**

*[Phase #3 - Advanced]*

12. Browse through the PDF in your guided trial folder and
    > read/experiment with the system other capabilities and features

13. Push additional popular docker hub images to view the results

    a.  mvila/npm-addict:production - This image has a malicious
        > package.

    b.  bkimminich/juice-shop - This has Application and Secret
        > Exposures.

    c.  nginxdemos/hello:latest - This has Service Exposures (nginx)

![](./media/image12.png){width="6.5in" height="2.625in"}
