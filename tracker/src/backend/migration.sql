DROP TABLE IF EXISTS bugs;

CREATE TABLE bugs (
    id SERIAL,
    project TEXT,
    bug_summary TEXT UNIQUE,
    bug_description TEXT,
    priority TEXT,
    status TEXT,
    reporter TEXT,
    completed BOOLEAN
);