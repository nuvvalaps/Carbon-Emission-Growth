# Carbon Emissions Growth and the Correlation with GDP per Capita and Population

### Project Link: 

#### Group Members - Sanjay Dabra, Richard Kim, Kai Murata, Pranay Nuvvala

## Objective: 
Create a visualization that displays how Carbon emissions are affected by population and GDP over several years.
Use this visualization to make informed decisions concerning:
    - Does an increase in population lead to an increase in emissions?
    - Does an increase in population increase GDP?
    - Does an increase in GDP increase emissions?

## Sources: 
We collected three sets of data with every country from 1960-2021 all in a CSV format. Additionally, a country code and lat/long CSV was used.

Datasets: https://databank.worldbank.org/reports.aspx?source=2&series=SP.POP.TOTL&country=

## Project Summary:
Global Carbon Emissions have been increasing since 1900. In the past 200 years, more carbon has been released into the atmosphere than the millions of years it took for plants to capture and transform the carbon to fossil fuels. According to Time Magazine, as economic activity increased, so did emissions except when the economic activity was hindered (Great Depression, World War II, 2008 Recession). 

## Findings:
Japan has a decrease in population beginning around 2010. 
Drop in U.S. emissions around 2008 was caused by to the Great Recession where energy demand decreased.
Based on the Time Magazine article, “emissions and economic growth have been decoupled, meaning the economy is still growing as emissions fall” for 32 developed and developing countries. Factors include:
    - Efficient use of energy
    - Low and zero-carbon sources of energy have become more affordable
    - Governmental climate policies
GDP per capita has a positive, yet weak, correlation with carbon emissions.
Population has strong correlation with increase in carbon emissions.
In the future, we would use total GDP to determine and add detailed sector emissions data.

## Instructions:
1. Install pandas and sqlalchemy into your computer

2. Go to Databank website to download needed CSV datasets

3. Create a folder titled 'Resources' and copy the four csv files

4. In 'Resources' folder, create 'Cleaned_CSV', 'Final_CSV', and 'JSON' folders

5. Open CO2, GDP, and Population files using jupyter notebook after activating environment

6. Once run, open Combined_and_Flask and run

7. Enter username and password on line 12

8. Run app.py to jsonify the datasets

9. Save the JSON in 'JSON' folder within 'Resources'

10. Run index.html to see visuals

-------------------------------------------------------------------------------------------------------------------------------

© 2022 Carbon Emission Growth Project, a Georgia Tech Bootcamp project, All Rights Reserved
