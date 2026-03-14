import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000';

const headers = {
  'Access-Control-Allow-Origin': '*',
  };

  const multipartHeaders = {
    ...headers,
      'Content-Type': 'multipart/form-data',
      };

      export const api = {
        // CRUD
          getAll: () =>
              axios.get(`${BASE_URL}/api/scrape/`, { headers }),

                create: (formData) =>
                    axios.post(`${BASE_URL}/api/scrape/`, formData, { headers: multipartHeaders }),

                      update: (id, formData) =>
                          axios.put(`${BASE_URL}/api/scrape/${id}/`, formData, { headers: multipartHeaders }),

                            delete: (id) =>
                                axios.delete(`${BASE_URL}/api/scrape/${id}/`, { headers }),

                                  // Task actions
                                    action: (id, endpoint) =>
                                        axios.post(`${BASE_URL}/api/scrape/${id}/${endpoint}/`, {}, { headers }),

                                          stopThread: (id) =>
                                              axios.post(`${BASE_URL}/api/scrape/${id}/stop_thread/`, {}, { headers }),

                                                deleteTask: (id) =>
                                                    axios.post(`${BASE_URL}/api/scrape/${id}/delete_task/`, {}, { headers }),

                                                      updateStats: () =>
                                                          axios.post(`${BASE_URL}/api/scrape/1/update_stats/`, {}, { headers }),

                                                            // Downloads
                                                              downloadExport: (id) =>
                                                                  axios.get(`${BASE_URL}/api/scrape/${id}/start_download3/`, {
                                                                        responseType: 'blob',
                                                                              headers: multipartHeaders,
                                                                                  }),

                                                                                    downloadOriginal: (id) =>
                                                                                        axios.get(`${BASE_URL}/api/scrape/${id}/start_download/`, {
                                                                                              responseType: 'blob',
                                                                                                    headers: multipartHeaders,
                                                                                                        }),
                                                                                                        
                                                                                                          downloadManual: () =>
                                                                                                              axios.get(`${BASE_URL}/api/scrape/1/start_download_manual/`, {
                                                                                                                    responseType: 'blob',
                                                                                                                          headers: multipartHeaders,
                                                                                                                              }),
                                                                                                                              };
                                                                                                                              
                                                                                                                              // All available scraper endpoints
                                                                                                                              export const SCRAPERS = [
                                                                                                                                { key: 'start_heureka_cz', label: 'Heureka.cz' },
                                                                                                                                  { key: 'start_heureka_sk', label: 'Heureka.sk' },
                                                                                                                                    { key: 'start_alza', label: 'Alza' },
                                                                                                                                      { key: 'start_arukereso', label: 'Arukereso' },
                                                                                                                                        { key: 'start_mimovrste', label: 'Mimovrste' },
                                                                                                                                          { key: 'start_kaufland_cz', label: 'Kaufland.cz' },
                                                                                                                                            { key: 'start_kaufland_de', label: 'Kaufland.de' },
                                                                                                                                              { key: 'start_kaufland_sk', label: 'Kaufland.sk' },
                                                                                                                                                { key: 'start_allegro', label: 'Allegro' },
                                                                                                                                                  { key: 'start_emag', label: 'Emag' },
                                                                                                                                                    { key: 'start_ceneo', label: 'Ceneo' },
                                                                                                                                                      { key: 'start_idealo', label: 'Idealo' },
                                                                                                                                                        { key: 'start_alzadata', label: 'Data Alza' },
                                                                                                                                                          { key: 'start_heudata', label: '..Heu' },
                                                                                                                                                            { key: 'start_allegrodata', label: '..Allegro' },
                                                                                                                                                            ];
