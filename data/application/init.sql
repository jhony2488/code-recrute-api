
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1
        FROM pg_database
        WHERE datname = 'appDB'
    ) THEN
        CREATE DATABASE appDB;
    END IF;
END $$;
