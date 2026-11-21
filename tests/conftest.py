"""Pytest configuration and global session cleanup for BrandProof AI."""
import os
import tempfile
import pytest

# Ensure isolated test database for entire test run
TEST_DB = os.path.join(tempfile.gettempdir(), "brandproof_test.db")
os.environ["DB_PATH"] = TEST_DB

@pytest.fixture(scope="session", autouse=True)
def setup_test_db():
    from app import db
    db.DB_PATH = TEST_DB
    # Reset connection if open
    if db._conn:
        try:
            db._conn.close()
        except Exception:
            pass
        db._conn = None
    for suffix in ("", "-wal", "-shm"):
        p = TEST_DB + suffix
        if os.path.exists(p):
            try:
                os.remove(p)
            except OSError:
                pass
    yield
    if db._conn:
        try:
            db._conn.close()
        except Exception:
            pass
        db._conn = None
    for suffix in ("", "-wal", "-shm"):
        p = TEST_DB + suffix
        if os.path.exists(p):
            try:
                os.remove(p)
            except OSError:
                pass

