# Scrape App - Frontend

React frontend pro scrapovací aplikaci. Vylepšená verze s čistou architekturou, opravenou správou paměti a bez duplicitního kódu.

## Struktura projektu

```
src/
  api/
    scrapeApi.js          # Centralizované API volání (axios)
  components/
    FileItem.jsx          # Jeden řádek úkolu v seznamu
    ScraperButtons.jsx    # Tlačítka pro spuštění scraperů
    UploadForm.jsx        # Formulář pro upload / editaci
  App.jsx                 # Hlavní komponenta (stav, logika)
  index.js
.env.example              # Šablona proměnných prostředí
package.json
```

## Instalace

```bash
# 1. Klonovat repozitář
git clone https://github.com/Donuland/scrape-app.git
cd scrape-app

# 2. Nainstalovat závislosti
npm install

# 3. Nastavit prostředí
cp .env.example .env
# Upravte .env - nastavte REACT_APP_API_URL na URL vašeho backendu

# 4. Spustit vývojový server
npm start
```

## Konfigurace (.env)

```
REACT_APP_API_URL=http://localhost:8000
```

## Podporované scrapery

| Tlačítko | Endpoint |
|---|---|
| Heureka.cz | `start_heureka_cz` |
| Heureka.sk | `start_heureka_sk` |
| Alza | `start_alza` |
| Arukereso | `start_arukereso` |
| Mimovrste | `start_mimovrste` |
| Kaufland.cz/de/sk | `start_kaufland_cz/de/sk` |
| Allegro | `start_allegro` |
| Emag | `start_emag` |
| Ceneo | `start_ceneo` |
| Idealo | `start_idealo` |
| Data Alza | `start_alzadata` |
| ..Heu | `start_heudata` |
| ..Allegro | `start_allegrodata` |

## Opravené chyby oproti původní verzi

- **Memory leak**: `setInterval` v `componentDidMount` nyní správně čištěn v `componentWillUnmount`
- - **DRY**: 12 duplicitních `run*` metod nahrazeno jednou generickou `handleRunScraper(taskId, endpoint)`
  - - **Hardcoded URL**: Backend URL přesunuta do `.env` souboru jako `REACT_APP_API_URL`
    - - **Error handling**: Přidán error stav a banner pro zobrazení chyb uživateli
      - - **Loading stav**: Tlačítka scraperů jsou disabled během běhu a zobrazují `...`
        - - **Download bug**: Opravena promise chain v metodě download
          - - **Pojmenování**: Přejmenována `deleteStop` → `ScraperButtons` (jasný účel)
            - - **Progress %**: Přidáno zobrazení procentuálního průběhu vedle done/overall
